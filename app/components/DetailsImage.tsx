import React from 'react';
import { Image, View } from 'react-native';
import { Images } from '../assets';
import { styles } from './styles/DetailsImageStyles';

const DetailsImage = () => {
  return (
    <View>
      <Image source={Images.placeholder} style={styles.backdropImage} />
      <Image source={Images.placeholder} style={styles.backdropOverlayImage} />
    </View>
  );
};

export default DetailsImage;
