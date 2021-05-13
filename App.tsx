import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { PokemonProvider } from './src/context/PokemonContext';
import BottomTabs from './src/navigator/bottomNavigator';

const AppState = ({ children }: any) => {
  return (
    <PokemonProvider>
      {children}
    </PokemonProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <BottomTabs />
      </AppState>
    </NavigationContainer>
  )
}

export default App;