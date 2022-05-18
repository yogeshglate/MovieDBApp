import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  imageBackground: {
    marginTop: verticalScale(-35),
    backgroundColor: Colors.primary,
  },
  movieList: {
    height: verticalScale(370),
  },
});
