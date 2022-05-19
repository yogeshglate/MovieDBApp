import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles/OverviewStyles';
import { strings } from '../constants';

type OverviewPropTypes = {
  overview?: string;
  director?: string;
};

const Overview = ({
  overview = strings.na,
  director = strings.na,
}: OverviewPropTypes) => {
  return (
    <>
      <View style={styles.overviewView}>
        <View style={styles.marginBottom}>
          <Text style={{ ...styles.overviewText, ...styles.bold }}>
            {strings.overview}
          </Text>
        </View>
        <View>
          <Text style={styles.text}>{overview}</Text>
        </View>
      </View>
      <View style={styles.directorView}>
        <View style={styles.marginBottom}>
          <Text style={{ ...styles.text, ...styles.bold }}>{director}</Text>
        </View>
        <View>
          <Text style={styles.text}>{strings.director}</Text>
        </View>
      </View>
    </>
  );
};

export default Overview;
