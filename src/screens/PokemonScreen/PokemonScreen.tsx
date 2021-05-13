import React, { useContext, useEffect, useState } from 'react';
import { Text, View, ScrollView, StyleSheet, Animated } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParams } from '../../navigator/PokedexNavigator';
import useDimensions from '../../hooks/useDimensions';
import { capitalize, renderPokemonImage } from '../../utils';
import { useAnimation } from '../../hooks/useAnimation';

import SvgComponent from '../../components/WaveSvg';
import Container from '../../components/Container/Container';
import GoBackHeader from '../../components/GoBackHeader/GoBackHeader';
import appTheme from '../../theme/appTheme';

import TabsPokemon from '../../navigator/topNavigator';
import { PokemonContext } from '../../context/PokemonContext';
import { SimplePokemon } from '../../interfaces/pokemonInterfaces';
import useEvolution from '../../hooks/useEvolution';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { };

const { width, height } = useDimensions();

export const PokemonScreen = ({ navigation, route }: Props) => {
  const { pokemonDetail, pokemonType, bgColor } = route.params;
  const { opacity, fadeIn } = useAnimation();
  const { evolutionPokemon, evolutionEvee, isLoading } = useEvolution(pokemonDetail.id);

  useEffect(() => {
    fadeIn(500);
  }, [])
  
  return (
    <ScrollView>
      <GoBackHeader />
      <SvgComponent 
        urlPicture={renderPokemonImage(pokemonDetail.id)} 
        bgColor={bgColor} pokemonName={pokemonDetail.name} 
        pokemonId={pokemonDetail.id} 
        pokemonType={pokemonType} 
      />
      <View style={{ flex: 1, marginTop: 90 }}>
        <TabsPokemon
          pokemonDetail={pokemonDetail}
          bgColor={bgColor}
          pokemonType={pokemonType}
          opacity={opacity}
          evolutionPokemon={evolutionPokemon}
          evolutionEvee={evolutionEvee}
          isLoading={isLoading}
        />
      </View>
    </ScrollView>
  )
}

export default PokemonScreen;