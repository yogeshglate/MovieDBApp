import { Colors } from './../../theme/Colors';
import { StyleSheet } from 'react-native';
import { verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column-reverse',
    paddingBottom: verticalScale(10),
  },
  movieList: {
    height: verticalScale(370),
  },
  imageBackground: {
    marginTop: verticalScale(-35),
    backgroundColor: Colors.primary,
  },
});
