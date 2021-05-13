import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import theme from '../../theme/appTheme';

const deviceHeight = Dimensions.get('window').height;

const Container = ({ children }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: deviceHeight,
    backgroundColor: theme.bgColor,
  }
})

export default Container;