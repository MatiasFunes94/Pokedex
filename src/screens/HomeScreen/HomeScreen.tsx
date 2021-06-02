import React, { useContext } from 'react';
import {
  FlatList,
  View,
  ActivityIndicator,
  Image
} from 'react-native';

import Container from '../../components/Container/Container';
import PokebolaImage from '../../components/PokebolaImage/PokebolaImage';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { PokemonContext } from '../../context/PokemonContext';

import { styles } from './styles';

const HomeScreen = () => {

  const { pokemonList, loadPokemons } = useContext(PokemonContext);

  const renderHeaderComponent = () => {
    const uri = 'https://cdn2.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png'
    return (
      <View style={styles.containerImagePokedex}>
        <Image source={{ uri }} style={styles.pokedexImage} />
      </View>
    )
  }

  const renderFooterComponent = () => {
    return (
      <ActivityIndicator
        size={20}
        style={{ height: 100 }}
        color="grey"
      />
    )
  }

  return (
    <Container>
      <PokebolaImage customStyle={styles.pokebolaImage} />
      <View style={{ alignItems: 'center' }}>
        <FlatList
          data={pokemonList}
          keyExtractor={(pokemon) => pokemon.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({ item }) => <PokemonCard pokemon={item} />}
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListHeaderComponent={renderHeaderComponent}
          ListFooterComponent={renderFooterComponent}
        />
      </View>
    </Container>
  )
}

export default HomeScreen;