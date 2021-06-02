import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { TabSearchNavigator } from './SearchNavigator';
import { TabPokedexNavigator } from './PokedexNavigator';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: '#fff',
      }}
      tabBarOptions={{
        activeTintColor: '#000',
        labelPosition: 'beside-icon',
        activeBackgroundColor: 'rgba(000,000,000,0.1)',
        labelStyle: {
          width: 60,
          fontSize: 15
        },
        tabStyle: {
          borderRadius: 30
        },
        style: {
          position: 'absolute',
          backgroundColor: 'rgba(244,244,244,0.9)',
          elevation: 0,
          borderWidth: 0,
          marginVertical: 10,
          marginHorizontal: 20,
          borderRadius: 30,
          borderTopWidth: 0,
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
          ),
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
    </Tab.Navigator>
  );
}

export default BottomTabs;