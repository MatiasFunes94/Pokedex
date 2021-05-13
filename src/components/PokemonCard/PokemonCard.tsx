import React from 'react'
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { capitalize } from '../../utils';

import { SimplePokemon } from '../../interfaces/pokemonInterfaces';

import { styles } from './styles';
import PokebolaImage from '../PokebolaImage/PokebolaImage';
import FadeInImage from '../FadeInImage/FadeInImage';
import { useNavigation } from '@react-navigation/core';

import usePokemonDetail from '../../hooks/usePokemonDetail';

interface Props {
  pokemon: SimplePokemon;
}

const PokemonCard = ({ pokemon }: Props) => {

  const { navigate } = useNavigation();

  const { name, id, picture } = pokemon;

  const { pokemonDetail, pokemonType, bgColor, isLoading } = usePokemonDetail(id);
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigate('PokemonScreen', { pokemonDetail, pokemonType, bgColor, isLoading })}
    >
      <View 
      style={[styles.cardContainer, { backgroundColor: bgColor }]}
      >
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text adjustsFontSizeToFit numberOfLines={1} style={styles.name}>
            {capitalize(name)}
          </Text>
          <Text adjustsFontSizeToFit numberOfLines={1} style={styles.id}>{`#${id}`}</Text>
        </View>
        <View style={styles.pokebolaContainer}>
          <PokebolaImage
            customStyle={styles.pokebola}
            renderWhitePokebola
          />
        </View>
        <View style={{ paddingTop: 15 }}>
          {pokemonType && pokemonType.map((type) => (
            <Text adjustsFontSizeToFit numberOfLines={1} key={type} style={[styles.containerType, styles.type]}>{type}</Text>
          ))}
        </View>
        <FadeInImage
          uri={picture}
          style={styles.pokemon}
        />
      </View>
    </TouchableOpacity>
  )
}

export default PokemonCard;