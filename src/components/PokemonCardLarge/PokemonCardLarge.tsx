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
import useDimensions from '../../hooks/useDimensions';

interface Props {
  pokemon: SimplePokemon;
}

const PokemonCardLarge = ({ pokemon }: Props) => {
  const { navigate } = useNavigation();
  const { width } = useDimensions();

  const { name, id, picture } = pokemon;

  const { pokemonDetail, pokemonType, bgColor, isLoading } = usePokemonDetail(id);
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigate('PokemonScreen', { pokemonDetail, pokemonType, bgColor, isLoading })}
      style={{ width }}
    >
      <View 
      style={[styles.cardContainer, { backgroundColor: bgColor }]}
      >
        <View style={{justifyContent: 'space-between', flex: 1, paddingVertical: 10}}>
          <View>
            <Text adjustsFontSizeToFit numberOfLines={1} style={styles.id}>{`#${id}`}</Text>
            <Text adjustsFontSizeToFit numberOfLines={1} style={styles.name}>
              {capitalize(name)}
            </Text>
          </View>
          <View style={{ paddingTop: 15, flexDirection: 'row' }}>
            {pokemonType && pokemonType.map((type) => (
              <Text adjustsFontSizeToFit numberOfLines={1} key={type} style={[styles.containerType, styles.type]}>{type}</Text>
            ))}
          </View>
        </View>
        <View style={styles.pokebolaContainer}>
          <PokebolaImage
            customStyle={styles.pokebola}
            renderWhitePokebola
          />
        </View>
        <FadeInImage
          uri={picture}
          style={styles.pokemon}
        />
      </View>
    </TouchableOpacity>
  )
}

export default PokemonCardLarge;