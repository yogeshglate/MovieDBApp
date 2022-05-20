import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import {
  AppConstant,
  detailsAPI,
  navigationStrings,
  strings,
} from '../constants';
import { HomeScreenProps } from '../navigation/AppNavigation';
import { MovieDetailsActions } from '../redux';
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
  id: number;
  isMovie: boolean;
};

const Card = ({
  imagePath,
  progressValue,
  movieName,
  releaseDate,
  title,
  trailerName,
  description,
  id,
  isMovie,
}: CardProps) => {
  const navigation = useNavigation<HomeScreenProps['navigation']>();
  const progressBarColor =
    progressValue >= 70 ? Colors.indicatorGreen : Colors.indicatorYellow;
  const trailerNameStyle = StyleSheet.flatten([
    styles.boldFont,
    title === strings.latestTrailers && styles.trailerDescription,
  ]);
  const trailerDescriptionStyle = StyleSheet.flatten([
    title === strings.latestTrailers && styles.trailerDescription,
  ]);
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate(navigationStrings.DETAILS, { id: AppConstant.id });
        isMovie
          ? dispatch(
              MovieDetailsActions.detailsMovieLoading(
                `${detailsAPI.movieBase}${id}${detailsAPI.movieEnd}`,
              ),
            )
          : dispatch(
              MovieDetailsActions.detailsMovieLoading(
                `${detailsAPI.tvBase}${id}${detailsAPI.tvEnd}`,
              ),
            );
      }}>
      {title !== strings.latestTrailers ? (
        <>
          <ImageBackground
            source={imagePath ? { uri: imagePath } : Images.placeholder}
            style={styles.cardView}>
            <Icon
              name={strings.circleMenu}
              size={26}
              style={styles.circleMenu}
              color={Colors.white}
            />
          </ImageBackground>
          <View style={styles.progressView}>
            <CircularProgress
              value={progressValue}
              activeStrokeColor={progressBarColor}
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
            <Text
              style={styles.boldFont}
              ellipsizeMode="tail"
              numberOfLines={1}>
              {movieName}
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
          <View style={styles.cardText}>
            <Text
              style={trailerNameStyle}
              ellipsizeMode="tail"
              numberOfLines={1}>
              {trailerName}
            </Text>
            <Text
              style={trailerDescriptionStyle}
              ellipsizeMode="tail"
              numberOfLines={2}>
              {description}
            </Text>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

export default Card;
