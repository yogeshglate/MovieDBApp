import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import { asMutable } from 'seamless-immutable';
import { Header, MovieList } from '../components';
import { flatListData, strings } from '../constants';
import {
  FreeToWatchSelector,
  LatestTrailersSelector,
  PopularMoviesSelector,
  TrendingMoviesSelector,
} from '../redux';
import { styles } from './styles/HomeStyles';

const Home = () => {
  const { popularMovies, popularLoading, popularPaging } = useSelector(
    PopularMoviesSelector.getPopularMoviesState,
  );

  const { latestTrailers, latestTrailersLoading, latestTrailersPaging } =
    useSelector(LatestTrailersSelector.getLatestTrailersState);

  const { freeToWatchMovies, freeToWatchLoading, freeToWatchPaging } =
    useSelector(FreeToWatchSelector.getFreeToWatchMoviesState);

  const { trendingMovies, trendingLoading, trendingPaging } = useSelector(
    TrendingMoviesSelector.getTrendingMoviesState,
  );

  const getAPIData = (title: string) => {
    switch (title) {
      case strings.whatsPopular:
        return {
          paging: popularPaging,
          movies: asMutable(popularMovies),
          loader: popularLoading,
        };
      case strings.freeToWatch:
        return {
          paging: freeToWatchPaging,
          movies: asMutable(freeToWatchMovies),
          loader: freeToWatchLoading,
        };
      case strings.latestTrailers:
        return {
          paging: latestTrailersPaging,
          movies: asMutable(latestTrailers),
          loader: latestTrailersLoading,
        };
      case strings.trending:
        return {
          paging: trendingPaging,
          movies: asMutable(trendingMovies),
          loader: trendingLoading,
        };
      default:
        return { paging: 1, movies: [], loader: false };
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header leftIcon={strings.bars} rightIcon={strings.search} />
      <FlatList
        data={flatListData}
        renderItem={({ item }) => (
          <MovieList
            title={item.title}
            dropDownData={item.dropDownData}
            movieData={getAPIData(item.title)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Home;
