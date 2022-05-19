import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import {
  Certification,
  DetailsImage,
  DetailsTitle,
  Header,
  Loader,
  Overview,
} from '../components';
import { navigationStrings, strings } from '../constants';
import { RootStackParams } from '../navigation/AppNavigation';
import { MovieDetailsSelector } from '../redux';
import { styles } from './styles/DetailsStyles';

type DetailsScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParams>;
  route: RouteProp<RootStackParams, navigationStrings.DETAILS>;
};

const Details = ({ navigation: { navigate } }: DetailsScreenProps) => {
  const { HOME } = navigationStrings;
  const { movieDetails, movieLoading } = useSelector(
    MovieDetailsSelector.getMovieDetailsState,
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header leftIcon={strings.backButton} onPress={() => navigate(HOME)} />
      {movieLoading ? (
        <Loader />
      ) : (
        <ScrollView contentContainerStyle={styles.detailsView}>
          <DetailsImage
            backdrop={movieDetails?.backdrop}
            poster={movieDetails?.poster}
          />
          <DetailsTitle
            progressValue={movieDetails?.progressValue || 0}
            title={movieDetails?.title}
            year={movieDetails?.year}
          />
          <Certification
            genres={movieDetails?.genre}
            runtime={movieDetails?.runtime || 0}
            rating={movieDetails?.certification}
            releaseDate={movieDetails?.release_date}
          />
          <Overview
            overview={movieDetails?.overview}
            director={movieDetails?.director}
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Details;
