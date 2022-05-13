import { Colors } from './../../theme/Colors';
import { StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardView: {
    marginHorizontal: moderateScale(10),
    marginVertical: verticalScale(20),
    height: verticalScale(225),
    width: horizontalScale(150),
    borderRadius: moderateScale(10),
    overflow: 'hidden',
  },
  circleMenu: {
    position: 'absolute',
    right: horizontalScale(10),
    top: verticalScale(5),
    color: Colors.white,
  },
  progressView: {
    position: 'absolute',
    bottom: verticalScale(75),
    left: horizontalScale(20),
  },
  cardFooterText: {
    justifyContent: 'flex-start',
    width: horizontalScale(150),
    maxHeight: verticalScale(60),
    paddingHorizontal: horizontalScale(10),
  },
  boldFont: { fontWeight: 'bold' },
  trailerDescription: { color: Colors.white },
  playButton: {
    position: 'absolute',
    left: horizontalScale(140),
    top: verticalScale(55),
  },
  cardViewTrailer: {
    marginHorizontal: moderateScale(10),
    height: verticalScale(150),
    width: horizontalScale(300),
    borderRadius: moderateScale(10),
    overflow: 'hidden',
    marginTop: verticalScale(10),
  },
  cardText: {
    width: horizontalScale(280),
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: verticalScale(20),
  },
});
