import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import GuessThePokemon from '../screens/GuessThePokemon/GuessThePokemon';

import { TabSearchNavigator } from './SearchNavigator';
import { TabPokedexNavigator } from './PokedexNavigator';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: '#fff'
      }}
      tabBarOptions={{
        activeTintColor: '#000',
        labelPosition: 'below-icon',
        labelStyle: {
          width: 60,
          fontSize: 15
        },
        style: {
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.9)',
          elevation: 0,
          borderWidth: 0,
        }
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: 'Pokedex',
          tabBarIcon: ({ color }) => (
            <Icon
              color={color}
              size={20}
              name='list-outline'
            />
          )
        }}
        name="HomeScreen"
        component={TabPokedexNavigator} />
      <Tab.Screen
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Icon
              color={color}
              size={20}
              name='search'
            />
          )
        }}
        name="SearchScreen"
        component={TabSearchNavigator} />
        {/* <Tab.Screen
        options={{
          tabBarLabel: 'Game',
          tabBarIcon: ({ color }) => (
            <Icon
              color={color}
              size={20}
              name='game-controller-outline'
            />
          )
        }}
        name="GameScreen"
        component={GuessThePokemon} /> */}
    </Tab.Navigator>
  );
}

export default BottomTabs;