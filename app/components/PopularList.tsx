import React, { ReactElement } from 'react';
import { FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { MovieTypeProps, strings } from '../constants';
import {
  FreeMovieActions,
  PopularMovieActions,
  TrendingMovieActions,
} from '../redux';
import Loader from './Loader';
import { styles } from './styles/PopularListStyles';

interface PopularListProps {
  title: string;
  renderMovieList: (item: MovieTypeProps) => ReactElement;
  freeToWatchEndPoint: string;
  whatsPopularEndPoint: string;
  paging: number;
  trendingEndPoint: string;
  movies: MovieTypeProps[];
}

const PopularList = ({
  title,
  freeToWatchEndPoint,
  renderMovieList,
  trendingEndPoint,
  whatsPopularEndPoint,
  movies,
  paging,
}: PopularListProps) => {
  const dispatch = useDispatch();

  const loadMoreData = (currentTitle: string) => {
    switch (currentTitle) {
      case strings.whatsPopular:
        dispatch(
          PopularMovieActions.whatsPopularLoading(
            `${whatsPopularEndPoint}&page=${paging + 1}`,
          ),
        );
        break;
      case strings.freeToWatch:
        dispatch(
          FreeMovieActions.freeToWatchLoading(
            `${freeToWatchEndPoint}&page=${paging + 1}`,
          ),
        );
        break;
      case strings.trending:
        dispatch(
          TrendingMovieActions.trendingLoading(
            `${trendingEndPoint}&page=${paging + 1}`,
          ),
        );
        break;
    }
  };

  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => renderMovieList(item)}
      horizontal={true}
      contentContainerStyle={styles.movieList}
      showsHorizontalScrollIndicator={false}
      onEndReached={() => loadMoreData(title)}
      onEndReachedThreshold={4}
      ListFooterComponent={Loader}
    />
  );
};

export default PopularList;
