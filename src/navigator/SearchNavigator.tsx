import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PokemonScreen from '../screens/PokemonScreen/PokemonScreen';
import SearchScreen from '../screens/SearchScreen/SearchScreen';

import { RootStackParams } from './PokedexNavigator';

const TabSearch = createStackNavigator<RootStackParams>();

export const TabSearchNavigator = () => {
  return (
    <TabSearch.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#fff'
      }
    }}
    >
      <TabSearch.Screen name="HomeScreen" component={SearchScreen} />
      <TabSearch.Screen name="PokemonScreen" component={PokemonScreen} />
    </TabSearch.Navigator>
  );
}