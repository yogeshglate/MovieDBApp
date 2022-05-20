import React, { useState } from 'react';
import { View } from 'react-native';
import { Card, ListHeader, Loader } from '../components';
import { AppConstant, MovieTypeProps, strings } from '../constants';
import { Colors } from '../theme';
import PopularList from './PopularList';
import { styles } from './styles/MovieListStyles';
import TrailersList from './TrailersList';

export interface MovieListProps {
  title: string;
  dropDownData: { label: string; value: string; endpoint: string }[];
  color?: string;
  movieData: { paging: number; movies: MovieTypeProps[]; loader: boolean };
}

const MovieList = ({ title, dropDownData, movieData }: MovieListProps) => {
  const [whatsPopularEndPoint, setWhatsPopularEndPoint] = useState('');
  const [freeToWatchEndPoint, setFreeToWatchEndPoint] = useState('');
  const [latestTrailerEndPoint, setLatestTrailerEndPoint] = useState('');
  const [trendingEndPoint, setTrendingEndPoint] = useState('');
  const { loader, movies, paging } = movieData;
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
        id={item?.id}
        isMovie={item?.original_title ? true : false}
      />
    );
  };

  return (
    <View style={styles.container}>
      <ListHeader
        title={title}
        dropDownData={dropDownData}
        color={Colors.white}
        trailerEndPoint={setLatestTrailerEndPoint}
        freeToWatchEndPoint={setFreeToWatchEndPoint}
        whatsPopularEndPoint={setWhatsPopularEndPoint}
        trendingEndPoint={setTrendingEndPoint}
      />
      {loader && <Loader />}
      {!loader && title === strings.latestTrailers && (
        <TrailersList
          latestTrailerEndPoint={latestTrailerEndPoint}
          renderMovieList={renderMovieList}
          movies={movies}
          paging={paging}
        />
      )}
      {!loader && title !== strings.latestTrailers && (
        <PopularList
          freeToWatchEndPoint={freeToWatchEndPoint}
          renderMovieList={renderMovieList}
          title={title}
          trendingEndPoint={trendingEndPoint}
          whatsPopularEndPoint={whatsPopularEndPoint}
          movies={movies}
          paging={paging}
        />
      )}
    </View>
  );
};

export default MovieList;
