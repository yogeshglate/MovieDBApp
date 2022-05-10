import { StyleSheet } from 'react-native';
import { verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  loaderView: {
    height: verticalScale(370),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
