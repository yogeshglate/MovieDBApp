import React from 'react';
import { FlatList, ImageBackground, View } from 'react-native';
import { strings, temporaryCardData } from '../constants';
import { Images } from '../theme';
import { Card, ListHeader } from '../components';
import { ListHeaderProp } from './ListHeader';
import { styles } from './styles/MovieListStyles';

const MovieList = ({ title, dropDownData }: ListHeaderProp) => {
  const renderMovieList = () => {
    return (
      <Card
        movieName={strings.whatsPopular}
        progressValue={75}
        releaseDate={strings.movies}
        imagePath={''}
        title={title}
        trailerName={strings.trailerName}
        description={strings.trailerDescription}
      />
    );
  };

  return (
    <View style={styles.container}>
      {title === strings.latestTrailers ? (
        <ImageBackground
          source={Images.headerLogo}
          resizeMode="stretch"
          style={styles.imageBackground}>
          <FlatList
            data={temporaryCardData}
            renderItem={renderMovieList}
            horizontal={true}
            contentContainerStyle={styles.movieList}
            showsHorizontalScrollIndicator={false}
          />
        </ImageBackground>
      ) : (
        <FlatList
          data={temporaryCardData}
          renderItem={renderMovieList}
          horizontal={true}
          contentContainerStyle={styles.movieList}
          showsHorizontalScrollIndicator={false}
        />
      )}
      <ListHeader title={title} dropDownData={dropDownData} />
    </View>
  );
};

export default MovieList;
