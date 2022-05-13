import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Card, ListHeader, Loader } from '../components';
import { asMutable } from 'seamless-immutable';
import { MovieTypeProps } from '../constants/staticData';
import { MoviesSelector } from '../redux/movieRedux';
import { useSelector } from 'react-redux';
import { ListHeaderProp } from './ListHeader';
import { AppConstant, strings } from '../constants';
import { Colors } from '../theme';
import { styles } from './styles/MovieListStyles';

const MovieList = ({ title, dropDownData }: ListHeaderProp) => {
  const {
    freeToWatchLoading,
    freeToWatchMovies,
    latestTrailers,
    latestTrailersLoading,
    popularLoading,
    popularMovies,
    trendingLoading,
    trendingMovies,
  } = useSelector(MoviesSelector.getMovies);

  const [loading, setLoading] = useState<boolean>(false);

  const setLoader = useCallback(() => {
    title === strings.whatsPopular && setLoading(popularLoading);
    title === strings.freeToWatch && setLoading(freeToWatchLoading);
    title === strings.trending && setLoading(trendingLoading);
  }, [freeToWatchLoading, popularLoading, title, trendingLoading]);

  useEffect(() => {
    setLoader();
  }, [setLoader]);

  const renderMovieList = (item: MovieTypeProps) => {
    return (
      <Card
        movieName={item?.original_title ?? item?.original_name}
        progressValue={item?.vote_average * 10}
        releaseDate={item?.release_date ?? item?.first_air_date}
        imagePath={
          item?.poster_path && AppConstant.baseImage + item?.poster_path
        }
        title={title}
        trailerName={item?.original_title ?? item?.original_name}
        description={item?.overview ?? item?.overview}
      />
    );
  };

  return (
    <View style={styles.container}>
      {title === strings.latestTrailers ? (
        latestTrailersLoading ? (
          <Loader />
        ) : (
          <View style={styles.imageBackground}>
            <FlatList
              data={asMutable(latestTrailers)}
              renderItem={({ item }) => renderMovieList(item)}
              horizontal={true}
              contentContainerStyle={styles.movieList}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        )
      ) : loading ? (
        <Loader />
      ) : (
        <FlatList
          data={
            title === strings.freeToWatch
              ? asMutable(freeToWatchMovies)
              : title === strings.whatsPopular
              ? asMutable(popularMovies)
              : asMutable(trendingMovies)
          }
          renderItem={({ item }) => renderMovieList(item)}
          horizontal={true}
          contentContainerStyle={styles.movieList}
          showsHorizontalScrollIndicator={false}
        />
      )}
      <ListHeader
        title={title}
        dropDownData={dropDownData}
        color={Colors.white}
      />
    </View>
  );
};

export default MovieList;
