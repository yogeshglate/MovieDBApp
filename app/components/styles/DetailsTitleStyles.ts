import { StyleSheet } from 'react-native';
import { Colors, Metrics, moderateScale } from '../../theme';

export const styles = StyleSheet.create({
  detailsTitleText: {
    margin: moderateScale(20),
    flexDirection: 'row',
  },
  headerText: { fontSize: moderateScale(23), color: Colors.white },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: Metrics.screenWidth,
  },
  bold: { fontWeight: 'bold' },
  text: { fontSize: moderateScale(16), color: Colors.white },
  rowCenter: { flexDirection: 'row', alignItems: 'center' },
});
