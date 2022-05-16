import { combineReducers } from 'redux';
import FreeMovieActions, {
  freeToWatchReducer,
  FreeToWatchSelector,
  FreeToWatchTypes,
} from './freeToWatchMovies';
import LatestTrailersActions, {
  latestTrailerReducer,
  LatestTrailersSelector,
  LatestTrailersTypes,
} from './latestTrailers';
import PopularMovieActions, {
  popularMoviesReducer,
  PopularMoviesSelector,
  PopularTypes,
} from './popularMovies';
import TrendingMovieActions, {
  trendingMoviesReducer,
  TrendingMoviesSelector,
  TrendingMovieTypes,
} from './trendingMovies';

export const rootReducer = combineReducers({
  popularMovies: popularMoviesReducer,
  freeToWatchMovies: freeToWatchReducer,
  latestTrailers: latestTrailerReducer,
  trendingMovies: trendingMoviesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export {
  PopularTypes,
  PopularMovieActions,
  FreeMovieActions,
  FreeToWatchTypes,
  LatestTrailersActions,
  LatestTrailersTypes,
  TrendingMovieActions,
  TrendingMovieTypes,
  FreeToWatchSelector,
  LatestTrailersSelector,
  PopularMoviesSelector,
  TrendingMoviesSelector,
};
