import React, {useEffect} from 'react';
import { StyleSheet, View, Text, Dimensions, Image, Animated } from 'react-native';
import { useAnimation } from '../../hooks/useAnimation';
import appTheme from '../../theme/appTheme';
import { capitalize } from '../../utils';
import PokebolaImage from '../PokebolaImage/PokebolaImage';
import WavyHeader from './WavyHeader';

export default function WaveScreen({ urlPicture, bgColor, pokemonName, pokemonId, pokemonType }) {
  const { opacity, position, fadeIn, startMovingPosition } = useAnimation();
  useEffect(() => {
    startMovingPosition(-100, 300);
    fadeIn(800);
  }, [])
  return (
    <View>
      <WavyHeader
        customStyles={styles.svgCurve}
        customHeight={200}
        customTop={160}
        customBgColor={bgColor}
        customWavePattern="M0.00,49.98 C161.68,129.77 383.46,109.03 500.00,49.98 L499.15,-3.45 L-1.41,-4.44 Z"
        bgColor={bgColor}
      />
      <View style={styles.containerText}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.pokemonName}>
          {capitalize(pokemonName)}
        </Text>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={styles.pokemonId}>{`#${pokemonId}`}</Text>
      </View>
      <Animated.View style={[pokemonType.length > 1 && styles.row, {opacity, top: 75, marginLeft: 20}]}>
        {pokemonType.map(type => (
          <View key={type} style={{...styles.typeLabelContainer}}>
            <Text style={styles.typeLabel}>{capitalize(type)}</Text>
          </View>
        ))}
      </Animated.View>
      <PokebolaImage renderWhitePokebola customStyle={styles.pokebolaImage} />
      <View style={styles.containerItem}>
        <Animated.Image
          source={{uri: urlPicture}}
          style={[
            styles.pokemonImage,
            {opacity, transform: [{translateY: position}]},
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerItem: {
    top: 80,
    alignItems: 'center',
  },
  pokemonImage: {
    width: 210,
    height: 210,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 35,
  },
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 70,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  pokemonName: {
    fontWeight: 'bold',
    fontSize: 28,
    width: 200,
    color: appTheme.light,
  },
  pokemonId: {
    fontWeight: 'bold',
    fontSize: 20,
    color: appTheme.light,
  },
  pokebolaImage: {
    width: 300,
    height: 300,
    position: 'absolute',
    opacity: 0.2,
    left: 150,
    top: 10,
  },
  typeLabelContainer: {
    height: 35,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    width: 70,
  },
  typeLabel: {
    color: appTheme.light,
    fontSize: 16,
    width: 60,
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row'
  }
});