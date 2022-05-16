import React, { ReactElement } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { MovieTypeProps } from '../constants';
import { LatestTrailersActions } from '../redux';
import Loader from './Loader';
import { styles } from './styles/TrailersListStyles';

interface TrailerListProps {
  renderMovieList: (item: MovieTypeProps) => ReactElement;
  latestTrailerEndPoint: string;
  paging: number;
  movies: MovieTypeProps[];
}

const TrailersList = ({
  renderMovieList,
  latestTrailerEndPoint,
  paging,
  movies,
}: TrailerListProps) => {
  const dispatch = useDispatch();

  const loadMoreData = () => {
    dispatch(
      LatestTrailersActions.latestTrailersLoading(
        `${latestTrailerEndPoint}&page=${paging + 1}`,
      ),
    );
  };

  return (
    <View style={styles.imageBackground}>
      <FlatList
        data={movies}
        renderItem={({ item }) => renderMovieList(item)}
        horizontal={true}
        contentContainerStyle={styles.movieList}
        showsHorizontalScrollIndicator={false}
        onEndReached={loadMoreData}
        onEndReachedThreshold={2}
        ListFooterComponent={Loader}
      />
    </View>
  );
};

export default TrailersList;
