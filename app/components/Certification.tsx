import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles/CertificationStyles';
import { strings } from '../constants';

const Certification = () => {
  return (
    <View style={styles.certificationContainer}>
      <View style={styles.rowCenter}>
        <View style={styles.certificationView}>
          <Text style={styles.certificationText}>{strings.rating}</Text>
        </View>
        <Text style={styles.text}>{strings.releaseDate}</Text>
        <Text style={styles.text}>{strings.country}</Text>
        <Text style={styles.text}>{strings.runtime}</Text>
      </View>
      <Text style={styles.text}>{strings.genres}</Text>
    </View>
  );
};

export default Certification;
