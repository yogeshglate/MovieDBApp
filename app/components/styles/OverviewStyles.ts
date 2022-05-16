import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

export const styles = StyleSheet.create({
  overviewText: { fontSize: moderateScale(21), color: Colors.white },
  overviewView: {
    padding: moderateScale(20),
    width: horizontalScale(390),
  },
  directorView: {
    padding: moderateScale(20),
    width: horizontalScale(390),
  },
  marginBottom: { marginBottom: verticalScale(10) },
  bold: { fontWeight: 'bold' },
  text: { fontSize: moderateScale(16), color: Colors.white },
});
