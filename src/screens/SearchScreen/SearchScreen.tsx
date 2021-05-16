import React, { useEffect, useState } from 'react'
import { Text, View, TextInput, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Container from '../../components/Container/Container';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import PokemonCardLarge from '../../components/PokemonCardLarge/PokemonCardLarge';
import useDebounce from '../../hooks/useDebounce';
import usePokemonSearch from '../../hooks/usePokemonSearch';
import { SimplePokemon } from '../../interfaces/pokemonInterfaces';

export const SearchScreen = () => {

  const { isFetching, pokemonList } = usePokemonSearch();

  const [userInput, setUserInput] = useState('');
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([])
  
  const debouncedValue = useDebounce(userInput);

  useEffect(() => {
    pokemonsToRenderInFlatlist();
  }, [debouncedValue])

  const pokemonsToRenderInFlatlist = () => {
    if (userInput) {
      setPokemonFiltered(pokemonList)
    }
    if (isNaN(Number(debouncedValue))) {
      setPokemonFiltered(pokemonList.filter((pokemon) => pokemon.name.toLowerCase().includes(debouncedValue.toLowerCase())))
    } else {
      const pokemonById = pokemonList.find((pokemon) => pokemon.id === debouncedValue)
      setPokemonFiltered((pokemonById) ? [pokemonById] : [])
    }
  }

  if (isFetching) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={50} color='#000' />
      </View>
    )
  }

  const dataToRender = debouncedValue ? pokemonFiltered : pokemonList

  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.containerInput}>
          <TextInput
            autoFocus
            placeholder="Search Pokemon or id"
            placeholderTextColor='lightgray'
            style={styles.input}
            value={userInput}
            onChangeText={setUserInput}
          />
          <Icon name='search' size={35} color='gray' />
        </View>
      </View>
        <View style={styles.containerList}>
          <FlatList
            data={dataToRender}
            keyExtractor={(pokemon) => pokemon.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <PokemonCardLarge pokemon={item} />}
          />
        </View>
    </Container>
  )
}

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  containerInput: {
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'gray',
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  input: {
    width: 200,
    color: '#000',
  },
  containerList: {
    marginTop: 20,
    alignItems: 'center',
  }
})