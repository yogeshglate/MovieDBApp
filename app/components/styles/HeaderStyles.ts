import { StyleSheet } from 'react-native';
import { Colors, moderateScale, horizontalScale, Metrics } from '../../theme';

export const styles = StyleSheet.create({
  headerContainer: {
    height: Metrics.screenHeight * 0.07,
    backgroundColor: Colors.primary,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(20),
  },
  headerLogo: {
    height: Metrics.screenHeight * 0.05,
    width: moderateScale(55),
    resizeMode: 'contain',
  },
  paddingRight: { paddingRight: horizontalScale(160) },
});
