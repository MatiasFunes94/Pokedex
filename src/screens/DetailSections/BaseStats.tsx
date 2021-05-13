import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import useDimensions from '../../hooks/useDimensions';
import { PokemonDetail } from '../../interfaces/pokemonDetailInterface';

interface Props {
  pokemonDetail: PokemonDetail;
  bgColor: string;
}

const { width } = useDimensions();

export const BaseStats = ({ pokemonDetail, bgColor }: Props) => {

  const [totalStat, setTotalStat] = useState<number>()

  useEffect(() => {
    calculateTotalStat();
  }, [])

  const calculateTotalStat = () => {
    let total = 0;
    pokemonDetail?.stats.forEach((x) => {
      total = total + x.base_stat
    })
    setTotalStat(total)
  }

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        {pokemonDetail?.stats.map((stat, index) => (
          <View key={index} style={styles.containerRow}>
            <Text style={styles.statName} >{stat.stat.name}</Text>
            <Text style={styles.statValue}>{stat.base_stat}</Text>
            <View style={{ justifyContent: 'center' }}>
              <View style={{ ...styles.lineColor, width: stat.base_stat * 1.25, backgroundColor: bgColor }} />
              <View style={styles.lineGray} />
            </View>
          </View>
        ))}
        <View style={styles.containerRow}>
          <Text style={styles.statName}>Total</Text>
          <Text style={styles.statValue}>{totalStat}</Text>
          <View style={{ justifyContent: 'center', marginLeft: 7 }}>
            {totalStat && <View style={{ ...styles.lineColor, width: totalStat * 0.21, backgroundColor: bgColor }} />}
            <View style={styles.lineGray} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default BaseStats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  containerRow: {
    flexDirection: 'row',
    paddingVertical: 10
  },
  statName: {
    width: 60,
    textTransform: 'capitalize',
    color: 'gray'
  },
  statValue: {
    width: 30,
    marginLeft: 10,
    textAlignVertical: 'center'
  },
  lineColor: {
    height: 4,
    top: 4,
    zIndex: 1
  },
  lineGray: {
    width: 200,
    backgroundColor: 'lightgray',
    height: 4
  }
});