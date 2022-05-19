import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles/DetailsTitleStyles';
import CircularProgress from 'react-native-circular-progress-indicator';
import { Colors } from '../theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { strings } from '../constants';

type DetailsTitleProps = {
  title?: string;
  year?: number;
  progressValue: number | 0;
};

const DetailsTitle = ({ progressValue, title, year }: DetailsTitleProps) => {
  const progressBarColor =
    progressValue >= 70 ? Colors.indicatorGreen : Colors.indicatorYellow;

  return (
    <>
      <View style={styles.detailsTitleText}>
        <Text style={{ ...styles.headerText, ...styles.bold }}>{title}</Text>
        <Text style={styles.headerText}>{year}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.rowCenter}>
          <CircularProgress
            value={progressValue}
            activeStrokeColor={progressBarColor}
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
