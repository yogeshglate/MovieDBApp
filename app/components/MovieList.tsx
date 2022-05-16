import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Card, ListHeader, Loader } from '../components';
import { asMutable } from 'seamless-immutable';
import { useDispatch, useSelector } from 'react-redux';
import {
  FreeMovieActions,
  FreeToWatchSelector,
  LatestTrailersActions,
  LatestTrailersSelector,
  PopularMovieActions,
  PopularMoviesSelector,
  TrendingMovieActions,
  TrendingMoviesSelector,
} from '../redux';
import { AppConstant, strings, MovieTypeProps } from '../constants';
import { Colors } from '../theme';
import { styles } from './styles/MovieListStyles';

export interface MovieListProps {
  title: string;
  dropDownData: { label: string; value: string; endpoint: string }[];
  color?: string;
}

const MovieList = ({ title, dropDownData }: MovieListProps) => {
  const { popularLoading, popularMovies, popularPaging } = useSelector(
    PopularMoviesSelector.getPopularMovies,
  );
  const { freeToWatchLoading, freeToWatchMovies, freeToWatchPaging } =
    useSelector(FreeToWatchSelector.getFreeToWatchMovies);

  const { latestTrailers, latestTrailersLoading, latestTrailersPaging } =
    useSelector(LatestTrailersSelector.getLatestTrailers);

  const { trendingLoading, trendingMovies, trendingPaging } = useSelector(
    TrendingMoviesSelector.getTrendingMovies,
  );

  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const [whatsPopularEndPoint, setWhatsPopularEndPoint] = useState('');
  const [freeToWatchEndPoint, setFreeToWatchEndPoint] = useState('');
  const [latestTrailerEndPoint, setLatestTrailerEndPoint] = useState('');
  const [trendingEndPoint, setTrendingEndPoint] = useState('');
  const [paging, setPaging] = useState(0);

  const setLoader = useCallback(() => {
    title === strings.whatsPopular &&
      (setLoading(popularLoading), setPaging(popularPaging));
    title === strings.freeToWatch &&
      (setLoading(freeToWatchLoading), setPaging(freeToWatchPaging));
    title === strings.trending &&
      (setLoading(trendingLoading), setPaging(trendingPaging));
  }, [
    freeToWatchLoading,
    freeToWatchPaging,
    popularLoading,
    popularPaging,
    title,
    trendingLoading,
    trendingPaging,
  ]);

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
        latestTrailersLoading && latestTrailersPaging === 1 ? (
          <Loader />
        ) : (
          <View style={styles.imageBackground}>
            <FlatList
              data={asMutable(latestTrailers)}
              renderItem={({ item }) => renderMovieList(item)}
              horizontal={true}
              contentContainerStyle={styles.movieList}
              showsHorizontalScrollIndicator={false}
              onEndReached={() =>
                dispatch(
                  LatestTrailersActions.latestTrailersLoading(
                    `${latestTrailerEndPoint}&page=${latestTrailersPaging + 1}`,
                  ),
                )
              }
              onEndReachedThreshold={2}
              ListFooterComponent={<Loader />}
            />
          </View>
        )
      ) : loading && paging === 1 ? (
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
          onEndReached={() => {
            title === strings.whatsPopular &&
              dispatch(
                PopularMovieActions.whatsPopularLoading(
                  `${whatsPopularEndPoint}&page=${popularPaging + 1}`,
                ),
              );
            title === strings.freeToWatch &&
              dispatch(
                FreeMovieActions.freeToWatchLoading(
                  `${freeToWatchEndPoint}&page=${freeToWatchPaging + 1}`,
                ),
              );
            title === strings.trending &&
              dispatch(
                TrendingMovieActions.trendingLoading(
                  `${trendingEndPoint}&page=${trendingPaging + 1}`,
                ),
              );
          }}
          onEndReachedThreshold={4}
          ListFooterComponent={<Loader />}
        />
      )}
      <ListHeader
        title={title}
        dropDownData={dropDownData}
        color={Colors.white}
        trailerEndPoint={setLatestTrailerEndPoint}
        freeToWatchEndPoint={setFreeToWatchEndPoint}
        whatsPopularEndPoint={setWhatsPopularEndPoint}
        trendingEndPoint={setTrendingEndPoint}
      />
    </View>
  );
};

export default MovieList;
