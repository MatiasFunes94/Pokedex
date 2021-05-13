import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import PokemonScreen from '../screens/PokemonScreen/PokemonScreen';
import { PokemonDetail } from '../interfaces/pokemonDetailInterface';

export type RootStackParams = {
  HomeScreen: undefined;
  PokemonScreen: { pokemonDetail: PokemonDetail, pokemonType: string[], bgColor: string, isLoading: string }
} 

const Stack = createStackNavigator<RootStackParams>();

export const TabPokedexNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#fff'
      }
    }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  );
}