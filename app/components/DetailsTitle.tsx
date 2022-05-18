import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles/DetailsTitleStyles';
import CircularProgress from 'react-native-circular-progress-indicator';
import { Colors } from '../theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { strings } from '../constants';

const DetailsTitle = () => {
  return (
    <>
      <View style={styles.detailsTitleText}>
        <Text style={{ ...styles.headerText, ...styles.bold }}>
          {strings.encanto}
        </Text>
        <Text style={styles.headerText}>{strings.year}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.rowCenter}>
          <CircularProgress
            value={77}
            activeStrokeColor={Colors.indicatorGreen}
            inActiveStrokeColor={Colors.black}
            inActiveStrokeOpacity={0.6}
            activeStrokeWidth={5}
            valueSuffix={'%'}
            progressValueColor={Colors.white}
            radius={30}
            circleBackgroundColor={Colors.black}
          />
          <Text style={styles.text}>{strings.userScore}</Text>
        </View>
        <Text style={styles.text}>{strings.separator}</Text>
        <Text style={styles.text}>
          <Icon name={strings.play} size={16} color={Colors.white} />
          {strings.playTrailer}
        </Text>
      </View>
    </>
  );
};

export default DetailsTitle;
