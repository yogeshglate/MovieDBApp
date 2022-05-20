import React from 'react';
import { Image, View } from 'react-native';
import { Images } from '../assets';
import { AppConstant } from '../constants';
import { styles } from './styles/DetailsImageStyles';

type DetailsImageProps = { backdrop?: string; poster?: string };

const DetailsImage = ({ backdrop, poster }: DetailsImageProps) => {
  const backDropImage = backdrop
    ? { uri: AppConstant.baseImage + backdrop }
    : Images.placeholder;

  const posterImage = poster
    ? { uri: AppConstant.baseImage + poster }
    : Images.headerLogo;

  return (
    <View>
      <Image source={backDropImage} style={styles.backdropImage} />
      <Image source={posterImage} style={styles.backdropOverlayImage} />
    </View>
  );
};

export default DetailsImage;
