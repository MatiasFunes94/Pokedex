import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import About from '../screens/DetailSections/About';
import BaseStats from '../screens/DetailSections/BaseStats';
import Evolution from '../screens/DetailSections/Evolution';

const TabNavigator = createMaterialTopTabNavigator();

const TabsPokemon = ({
  pokemonDetail,
  bgColor,
  pokemonType,
  opacity,
  evolutionPokemon,
  evolutionEvee,
  isLoading
}: any) => {
  return (
    <NavigationContainer independent={true}>
      <TabNavigator.Navigator tabBarOptions={{
        style: { elevation: 0 },
        labelStyle: { fontSize: 14, width: 80, textTransform: 'capitalize', fontWeight: 'bold' },
        indicatorStyle: { borderBottomColor: bgColor, borderBottomWidth: 2 }

      }} style={{ marginHorizontal: 20 }}>
        <TabNavigator.Screen
          children={() => <About
            pokemonDetail={pokemonDetail}
            bgColor={bgColor}
            pokemonType={pokemonType}
            opacity={opacity} />}
          options={{ tabBarLabel: 'About' }}
          name="About" />
        <TabNavigator.Screen
          children={() => <Evolution
            evolutionPokemon={evolutionPokemon}
            bgColor={bgColor}
            evolutionEvee={evolutionEvee}
            isLoading={isLoading} />}
          options={{ tabBarLabel: 'Evolution' }}
          name="Evolution" />
        <TabNavigator.Screen
          children={() => <BaseStats
            pokemonDetail={pokemonDetail}
            bgColor={bgColor} />}
          options={{ tabBarLabel: 'Base Stats' }}
          name="BaseStats" />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
}

export default TabsPokemon;