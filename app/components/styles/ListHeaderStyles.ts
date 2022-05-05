import { StyleSheet } from 'react-native';
import {
  Colors,
  moderateScale,
  Metrics,
  verticalScale,
  horizontalScale,
} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(Metrics.screenHeight * 0.02),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: -verticalScale(Metrics.screenHeight * 0.03),
  },
  headerText: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    color: Colors.black,
  },
  dropdown: {
    width: horizontalScale(140),
    height: verticalScale(20),
    borderRadius: moderateScale(30),
    backgroundColor: Colors.primary,
  },
  dropdownLabel: {
    color: Colors.filterTextGradient1,
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dropdownContainer: {
    width: horizontalScale(140),
    borderRadius: moderateScale(30),
  },
  background: {
    backgroundColor: Colors.filterTextGradient2,
  },
  listItems: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
