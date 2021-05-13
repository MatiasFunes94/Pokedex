import { Dimensions } from 'react-native';

const useDimensions = () => {

  const { height, width } = Dimensions.get('window');

  return {
    height,
    width,
  }
}

export default useDimensions;