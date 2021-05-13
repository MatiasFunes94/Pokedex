import React from 'react'
import { Animated, StyleSheet, Text, View, Image } from 'react-native';
import appTheme from '../../theme/appTheme';
import { capitalize } from '../../utils';
import { PokemonDetail } from '../../interfaces/pokemonDetailInterface';
import { ScrollView } from 'react-native-gesture-handler';

interface Props {
  pokemonDetail: PokemonDetail;
  bgColor: string;
  pokemonType: string[];
  opacity: number;
}

export const About = ({ pokemonDetail, bgColor, pokemonType, opacity }: Props) => {

  // const renderTypes = () => (
  //   <Animated.View style={[pokemonType.length > 1 && styles.row, { opacity, marginTop: 30, marginLeft: 20 }]}>
  //     {pokemonType.map((type: any) => (
  //       <View key={type} style={{ ...styles.typeLabelContainer, backgroundColor: bgColor }}>
  //         <Text style={styles.typeLabel}>{capitalize(type)}</Text>
  //       </View>
  //     ))}
  //   </Animated.View>
  // )

  const renderDimensions = () => (
    <View style={[styles.containerHeighWeight, styles.containerShadow]}>
      <View style={styles.containerDimensions}>
        <Text style={styles.DimensionsTitle}>Height</Text>
        <Text style={styles.DimensionsValue}>{`${(pokemonDetail.height * 0.10).toString().slice(0, 5)} cm`}</Text>
      </View>
      <View style={styles.containerDimensions}>
        <Text style={styles.DimensionsTitle}>Weight</Text>
        <Text style={styles.DimensionsValue}>{`${(pokemonDetail.weight * 0.10).toString().slice(0, 5)} kg`}</Text>
      </View>
    </View>
  )

  const renderAbilities = () => (
    <View style={[styles.containerAbilities, styles.containerShadow]}>
        <Text style={styles.DimensionsTitle}>Abilities</Text>
      <View style={{...styles.row, justifyContent: 'space-between'}}>
        {pokemonDetail.abilities.map(({ ability }) => (
          <Text key={ability.name} style={{...styles.abilityValue, textTransform: 'capitalize'}}>{ability.name}</Text>
        ))}
      </View>
    </View>
  )

  const renderSprites = () => (
    <View style={{ flex: 1, justifyContent: 'space-around', flexDirection: 'row', marginTop: 10 }}>
      {pokemonDetail.sprites.back_default &&
        <Image source={{ uri: pokemonDetail.sprites.back_default }} style={{...styles.spriteImage, marginRight: 20}} />}
      {pokemonDetail.sprites.front_default &&
        <Image source={{ uri: pokemonDetail.sprites.front_default }} style={styles.spriteImage} />}
    </View>
  )

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* {renderTypes()} */}
      {renderDimensions()}
      {renderAbilities()}
      {renderSprites()}
    </ScrollView>
  )
}

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  typeLabelContainer: {
    height: 35,
    borderRadius: 15,
    justifyContent: 'center',
    marginRight: 10,
    width: 70,
  },
  typeLabel: {
    color: appTheme.light,
    fontSize: 16,
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row'
  },
  containerShadow: {
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  containerHeighWeight: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  containerDimensions: {
    paddingVertical: 20
  },
  DimensionsTitle: {
    width: 80,
    textAlign: 'center',
    fontSize: 17,
    marginHorizontal: 20,
    color: 'gray'
  },
  DimensionsValue: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold'
  },
  spriteImage: {
    width: 80,
    height: 80,
  },
  containerAbilities: {
    marginTop: 20,
    justifyContent: 'space-around',
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: 20
  },
  abilityValue: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    width: 100,
  }
});