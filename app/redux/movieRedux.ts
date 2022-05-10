import { Action } from 'redux';
import { createActions, createReducer } from 'reduxsauce';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { MovieTypeProps } from '../constants/staticData';
import { RootState } from '../redux';

enum TypesNames {
  WHATS_POPULAR_LOADING = 'WHATS_POPULAR_LOADING',
  WHATS_POPULAR = 'WHATS_POPULAR',
  FREE_TO_WATCH_LOADING = 'FREE_TO_WATCH_LOADING',
  FREE_TO_WATCH = 'FREE_TO_WATCH',
  LATEST_TRAILERS_LOADING = 'LATEST_TRAILERS_LOADING',
  LATEST_TRAILERS = 'LATEST_TRAILERS',
  TRENDING_LOADING = 'TRENDING_LOADING',
  TRENDING = 'TRENDING',
  ERROR = 'ERROR',
}

type ActionTypes =
  | TypesNames.WHATS_POPULAR_LOADING
  | TypesNames.WHATS_POPULAR
  | TypesNames.FREE_TO_WATCH_LOADING
  | TypesNames.FREE_TO_WATCH
  | TypesNames.LATEST_TRAILERS_LOADING
  | TypesNames.LATEST_TRAILERS
  | TypesNames.TRENDING_LOADING
  | TypesNames.TRENDING
  | TypesNames.ERROR;

export interface ActionParamTypes extends Action<ActionTypes> {
  popularMoviesData: { popularMovies: MovieTypeProps[] };
  freeMoviesData: { freeMovies: MovieTypeProps[] };
  latestTrailersData: { latestTrailers: MovieTypeProps[] };
  trendingMoviesData: { trendingMovies: MovieTypeProps[] };
  error: { error: string };
}

const { Types, Creators } = createActions({
  whatsPopular: ['popularMoviesData'],
  whatsPopularLoading: ['endpoint'],
  freeToWatch: ['freeMoviesData'],
  freeToWatchLoading: ['endpoint'],
  latestTrailers: ['latestTrailersData'],
  latestTrailersLoading: ['endpoint'],
  trending: ['trendingMoviesData'],
  trendingLoading: ['endpoint'],
  error: ['error'],
});

export const MovieTypes = Types;
export default Creators;

export interface AuthStateTypes {
  popularMovies: MovieTypeProps[];
  freeToWatchMovies: MovieTypeProps[];
  latestTrailers: MovieTypeProps[];
  trendingMovies: MovieTypeProps[];
  popularLoading: boolean;
  freeToWatchLoading: boolean;
  latestTrailersLoading: boolean;
  trendingLoading: boolean;
  error: string | null;
}

export const INITIAL_STATE: ImmutableObject<AuthStateTypes> = Immutable({
  popularMovies: [],
  freeToWatchMovies: [],
  latestTrailers: [],
  trendingMovies: [],
  popularLoading: false,
  freeToWatchLoading: false,
  latestTrailersLoading: false,
  trendingLoading: false,
  error: null,
});

export const MoviesSelector = {
  getMovies: (state: RootState) => state.movies,
};

export const setPopularMoviesLoading = (
  state: ImmutableObject<AuthStateTypes>,
) => {
  return state.merge({ ...state, popularLoading: true });
};

export const setFreeToWatchLoading = (
  state: ImmutableObject<AuthStateTypes>,
) => {
  return state.merge({ ...state, freeToWatchLoading: true });
};

export const setLatestTrailersLoading = (
  state: ImmutableObject<AuthStateTypes>,
) => {
  return state.merge({ ...state, latestTrailersLoading: true });
};

export const setTrendingLoading = (state: ImmutableObject<AuthStateTypes>) => {
  return state.merge({ ...state, trendingLoading: true });
};

export const setPopularMovies = (
  state: ImmutableObject<AuthStateTypes>,
  { popularMoviesData: { popularMovies } }: ActionParamTypes,
) => {
  return state.merge({
    ...state,
    popularLoading: false,
    popularMovies: popularMovies,
  });
};

export const setFreeToWatchMovies = (
  state: ImmutableObject<AuthStateTypes>,
  { freeMoviesData: { freeMovies } }: ActionParamTypes,
) => {
  return state.merge({
    ...state,
    freeToWatchLoading: false,
    freeToWatchMovies: freeMovies,
  });
};

export const setLatestTrailers = (
  state: ImmutableObject<AuthStateTypes>,
  { latestTrailersData: { latestTrailers } }: ActionParamTypes,
) => {
  return state.merge({
    ...state,
    latestTrailersLoading: false,
    latestTrailers: latestTrailers,
  });
};

export const setTrendingMovies = (
  state: ImmutableObject<AuthStateTypes>,
  { trendingMoviesData: { trendingMovies } }: ActionParamTypes,
) => {
  return state.merge({
    ...state,
    trendingLoading: false,
    trendingMovies: trendingMovies,
  });
};

export const setError = (
  state: ImmutableObject<AuthStateTypes>,
  { error: { error } }: ActionParamTypes,
) => {
  return state.merge({
    ...state,
    trendingLoading: false,
    popularLoading: false,
    freeToWatchLoading: false,
    latestTrailersLoading: false,
    error: error,
  });
};

export const movieReducer = createReducer(INITIAL_STATE, {
  [Types.WHATS_POPULAR_LOADING]: setPopularMoviesLoading,
  [Types.WHATS_POPULAR]: setPopularMovies,
  [Types.FREE_TO_WATCH_LOADING]: setFreeToWatchLoading,
  [Types.FREE_TO_WATCH]: setFreeToWatchMovies,
  [Types.LATEST_TRAILERS_LOADING]: setLatestTrailersLoading,
  [Types.LATEST_TRAILERS]: setLatestTrailers,
  [Types.TRENDING_LOADING]: setTrendingLoading,
  [Types.TRENDING]: setTrendingMovies,
  [Types.ERROR]: setError,
});
