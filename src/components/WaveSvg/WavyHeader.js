import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export default function WavyHeader({
  customStyles,
  customHeight,
  customTop,
  customBgColor,
  customWavePattern,
  bgColor,
}) {
  return (
    <View style={customStyles}>
      <View style={{backgroundColor: bgColor, height: customHeight}}>
        <Svg
          height="100%"
          width="100%"
          viewBox="0 0 500 150"
          style={{position: 'absolute', top: customTop}}>
          <Path fill={customBgColor} d={customWavePattern} />
        </Svg>
      </View>
    </View>
  );
}
