import { StyleSheet } from 'react-native';
import { Colors, Metrics, moderateScale } from '../../theme';

export const styles = StyleSheet.create({
  certificationContainer: {
    alignItems: 'center',
    padding: moderateScale(10),
    width: Metrics.screenWidth,
  },
  text: { fontSize: moderateScale(16), color: Colors.white },
  rowCenter: { flexDirection: 'row', alignItems: 'center' },
  certificationText: { color: Colors.certification },
  certificationView: {
    borderWidth: 1,
    borderColor: Colors.certification,
    padding: moderateScale(2),
    borderRadius: 2,
    alignItems: 'center',
  },
});
