import React from 'react'
import { Image, ImageStyle, StyleProp, View } from 'react-native'

interface Props {
  customStyle: StyleProp<ImageStyle>
  renderWhitePokebola?: boolean;
}

const PokebolaImage = ({ customStyle, renderWhitePokebola }: Props) => {
  return (
    <View>
      {
        renderWhitePokebola ?
          <Image source={require('../../assets/pokebola-blanca.png')} style={customStyle} /> :
          <Image source={require('../../assets/pokebola.png')} style={customStyle} />
      }
    </View>
  )
}

export default PokebolaImage;