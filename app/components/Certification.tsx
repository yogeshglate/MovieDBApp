import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles/CertificationStyles';
import { strings } from '../constants';

type CertificationPropTypes = {
  rating?: string;
  releaseDate?: string;
  runtime: number | 0;
  genres?: string | undefined;
};

const Certification = ({
  genres,
  rating,
  releaseDate,
  runtime,
}: CertificationPropTypes) => {
  const totalRuntime = `${Math.round(runtime / 60)}h ${runtime % 60}m`;
  const certification = rating || strings.rating;

  return (
    <View style={styles.certificationContainer}>
      <View style={styles.rowCenter}>
        <View style={styles.certificationView}>
          <Text style={styles.certificationText}>{certification}</Text>
        </View>
        <Text style={styles.text}>{releaseDate}</Text>
        <Text style={styles.text}>{strings.country}</Text>
        <Text style={styles.text}>{totalRuntime}</Text>
      </View>
      <Text style={styles.text}>{genres}</Text>
    </View>
  );
};

export default Certification;
