import { StyleSheet } from 'react-native';
import useDimensions from '../../hooks/useDimensions';
import appTheme from '../../theme/appTheme';

const { height, width } = useDimensions();

export const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    height: 150,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 20,
    color: appTheme.light,
    paddingTop: 10,
    paddingLeft: 10,
  },
  id: {
    fontSize: 20,
    color: appTheme.light,
    paddingRight: 10,
    paddingLeft: 10,
  },
  containerType: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: 65,
    borderRadius: 20,
    marginLeft: 10,
  },
  type: {
    fontSize: 15,
    color: appTheme.light,
    
    marginBottom: 5,
    paddingVertical: 2,
    textAlign: 'center'
  },
  pokebolaContainer: {
    width: 140,
    height: 140,
    position: 'absolute',
    right: -5,
    top: 10,
    overflow: 'hidden',
  },
  pokebola: {
    height: 170,
    width: 170,
    opacity: 0.2,
  },
  pokemon: {
    width: 140,
    height: 140,
    position: 'absolute',
    right: 5,
    top: 7,
  },
});
