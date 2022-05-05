import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppConstant, navigationStrings, strings } from '../constants';
import { HomeScreenProps } from '../navigation/AppNavigation';
import { Colors, Images } from '../theme';
import { styles } from './styles/CardStyles';

type CardProps = {
  imagePath: string;
  progressValue: number;
  movieName: string;
  releaseDate: string;
  title: string;
  trailerName?: string;
  description?: string;
};

const Card = ({
  imagePath,
  progressValue,
  movieName,
  releaseDate,
  title,
  trailerName,
  description,
}: CardProps) => {
  const navigation = useNavigation<HomeScreenProps['navigation']>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate(navigationStrings.DETAILS, { id: AppConstant.id })
      }>
      {title !== strings.latestTrailers ? (
        <>
          <ImageBackground
            source={imagePath ? { uri: imagePath } : Images.placeholder}
            style={styles.cardView}>
            <Icon
              name={strings.circleMenu}
              size={26}
              style={styles.circleMenu}
            />
          </ImageBackground>
          <View style={styles.progressView}>
            <CircularProgress
              value={progressValue}
              activeStrokeColor={Colors.indicatorGreen}
              inActiveStrokeColor={Colors.black}
              inActiveStrokeOpacity={0.6}
              activeStrokeWidth={5}
              valueSuffix={'%'}
              progressValueColor={Colors.white}
              radius={20}
              circleBackgroundColor={Colors.black}
            />
          </View>
          <View style={styles.cardFooterText}>
            <Text style={styles.boldFont}>
              {movieName + movieName + movieName}
            </Text>
            <Text>{releaseDate}</Text>
          </View>
        </>
      ) : (
        <>
          <ImageBackground
            source={imagePath ? { uri: imagePath } : Images.placeholder}
            style={styles.cardViewTrailer}>
            <Icon
              name={strings.circleMenu}
              size={26}
              style={styles.circleMenu}
            />
            <Icon
              name={strings.play}
              size={42}
              style={styles.playButton}
              color={Colors.white}
            />
          </ImageBackground>
          <Text style={styles.boldFont}>{trailerName}</Text>
          <Text>{description}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default Card;
