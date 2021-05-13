import React, { useEffect } from 'react'
import { ActivityIndicator, Animated, Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useDimensions from '../../hooks/useDimensions';
import { renderPokemonImage } from '../../utils';
import { SimplePokemon } from '../../interfaces/pokemonInterfaces';
import { useAnimation } from '../../hooks/useAnimation';
import { evolutionEveeProps } from '../../hooks/useEvolution';
import FadeInImage from '../../components/FadeInImage/FadeInImage';

interface Props {
  evolutionPokemon: SimplePokemon[];
  evolutionEvee: evolutionEveeProps[];
  bgColor: string;
  isLoading: boolean;
}

export const Evolution = ({ evolutionPokemon, bgColor, evolutionEvee, isLoading }: Props) => {
  console.log(evolutionPokemon)
  const { width, height } = useDimensions();
  const { opacity, fadeIn } = useAnimation();

  useEffect(() => {
    fadeIn(500);
  }, [])

  const renderSpinner = () => (
    <ActivityIndicator color={bgColor} style={{}} size={50} />
  )

  const renderEveeEvolutions = () => (
    <Animated.View style={{opacity}}>
      <View style={{flexWrap: 'wrap', flexDirection: 'row' }}>
        {
          evolutionEvee.length > 0 &&
          evolutionEvee.map((x) => (
            <View key={x.id}>
              <FadeInImage uri={renderPokemonImage(x.id)} style={styles.picture} />
              <Text style={styles.eeveeNames}>{x.name}</Text>
            </View>
          ))
        }
      </View>
    </Animated.View>
  )

  const renderThreeEvolutions = () => (
      <Animated.View style={{opacity}}>
        <View style={styles.containerEvolutionRow}>
          <View style={styles.containerPictureText}>
            <FadeInImage uri={evolutionPokemon[0]?.picture} style={styles.picture} />
            <Text style={styles.name}>{evolutionPokemon[0]?.name}</Text>
          </View>
          <View style={{ justifyContent: 'center' }}>
            <Icon name='arrow-forward' size={35} color={bgColor} />
          </View>
          <View style={styles.containerPictureText}>
            <FadeInImage uri={evolutionPokemon[1]?.picture} style={styles.picture} />
            <Text style={styles.name}>{evolutionPokemon[1]?.name}</Text>
          </View>
        </View>
        <View style={{ ...styles.containerEvolutionRow, marginTop: 30 }}>
          <View style={styles.containerPictureText}>
            <FadeInImage uri={evolutionPokemon[1]?.picture} style={styles.picture} />
            <Text style={styles.name}>{evolutionPokemon[1]?.name}</Text>
          </View>
          <View style={{ justifyContent: 'center' }}>
            <Icon name='arrow-forward' size={35} color={bgColor} />
          </View>
          <View style={styles.containerPictureText}>
            <FadeInImage uri={evolutionPokemon[2]?.picture} style={styles.picture} />
            <Text style={styles.name}>{evolutionPokemon[2]?.name}</Text>
          </View>
        </View>
      </Animated.View>
  )

  const renderTwoEvolutions = () => {
    let pokemonsToRender: any = [];
    evolutionPokemon.map((pokemon) => {
      if (pokemon) {
        pokemonsToRender.push({
          name: pokemon.name,
          picture: pokemon.picture,
        });
      }
    })
    return (
      <Animated.View style={{ opacity }}>
      <View style={styles.containerEvolutionRow}>
        <View style={styles.containerPictureText}>
          <FadeInImage uri={pokemonsToRender[0]?.picture} style={{ width: 150, height: 150 }} />
          <Text style={styles.name}>{pokemonsToRender[0]?.name}</Text>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Icon name='arrow-forward' size={35} color={bgColor} />
        </View>
        <View style={styles.containerPictureText}>
          <FadeInImage uri={pokemonsToRender[1]?.picture} style={{ width: 150, height: 150 }} />
          <Text style={styles.name}>{pokemonsToRender[1]?.name}</Text>
        </View>
      </View>
    </Animated.View>
    )
  }

  const renderOneEvolution = () => {
    let pokemonsToRender: any = [];
    evolutionPokemon.map((pokemon) => {
      if (pokemon) {
        pokemonsToRender.push({
          name: pokemon.name,
          picture: pokemon.picture,
        });
      }
    })
    return (
      <Animated.View style={{ opacity }}>
      <View style={{...styles.containerEvolutionRow, justifyContent: 'center'}}>
        <View style={styles.containerPictureText}>
          <FadeInImage uri={pokemonsToRender[0]?.picture} style={{ width: 150, height: 150 }} />
          <Text style={styles.name}>{pokemonsToRender[0]?.name}</Text>
        </View>
      </View>
    </Animated.View>
    )
  }

  let pokemonsToRender: any = [];
    evolutionPokemon.map((pokemon) => {
      if (pokemon) {
        pokemonsToRender.push({
          name: pokemon.name,
          picture: pokemon.picture,
        });
      }
    })

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <View style={{ width: width * 0.8 }}>
        {isLoading ? renderSpinner()
          : evolutionEvee.length > 0 ? renderEveeEvolutions()
            : pokemonsToRender.length === 3 ? renderThreeEvolutions()
              : pokemonsToRender.length === 2 ? renderTwoEvolutions()
                : renderOneEvolution()
        }
      </View>
    </View>
  )
}

export default Evolution;

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    textTransform: 'capitalize',
    width: 130,
    textAlign: 'center',
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
  picture: {
    width: 100,
    height: 100,
  },
  containerPictureText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerEvolutionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  eeveeNames: {
    fontSize: 16,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
});