import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale } from '../../theme';

export const styles = StyleSheet.create({
  backdropImage: { height: moderateScale(175), width: moderateScale(390) },
  backdropOverlayImage: {
    height: moderateScale(135),
    width: moderateScale(90),
    position: 'absolute',
    tintColor: Colors.primary,
    left: horizontalScale(20),
    top: horizontalScale(20),
    borderRadius: 10,
  },
});
