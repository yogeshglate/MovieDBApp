import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { styles } from './styles/LoaderStyles';

const Loader = () => {
  return (
    <View style={styles.loaderView}>
      <ActivityIndicator size={50} />
    </View>
  );
};

export default Loader;
