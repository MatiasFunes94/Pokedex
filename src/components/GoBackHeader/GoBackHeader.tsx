import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Ionicons';

export const GoBackHeader = () => {
  const { goBack } = useNavigation();
  return (
    <View style={styles.goBackButton}>
      <TouchableOpacity onPress={() => goBack()}>
        <Icon name='arrow-back' size={35} color='#fff' />
      </TouchableOpacity>
    </View>
  )
}

export default GoBackHeader;

const styles = StyleSheet.create({
  goBackButton: {
    position: 'absolute',
    zIndex: 1,
    margin: 20,
  },
})