import { Action } from 'redux';
import { createActions, createReducer } from 'reduxsauce';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { MovieTypeProps } from '../constants';
import { RootState } from '../redux';

export enum TypesNames {
  WHATS_POPULAR_LOADING = 'WHATS_POPULAR_LOADING',
  WHATS_POPULAR_DATA = 'WHATS_POPULAR_DATA',
  WHATS_POPULAR_ERROR = 'ERROR',
  FREE_TO_WATCH_LOADING = 'FREE_TO_WATCH_LOADING',
  FREE_TO_WATCH_DATA = 'FREE_TO_WATCH_DATA',
  FREE_TO_WATCH_ERROR = 'ERROR',
  LATEST_TRAILERS_LOADING = 'LATEST_TRAILERS_LOADING',
  LATEST_TRAILERS_DATA = 'LATEST_TRAILERS',
  LATEST_TRAILERS_ERROR = 'ERROR',
  TRENDING_LOADING = 'TRENDING_LOADING',
  TRENDING_DATA = 'TRENDING',
  TRENDING_ERROR = 'ERROR',
  RESET_PAGING = 'RESET_PAGING',
}

export type ActionTypes =
  | TypesNames.WHATS_POPULAR_LOADING
  | TypesNames.WHATS_POPULAR_DATA
  | TypesNames.WHATS_POPULAR_ERROR
  | TypesNames.FREE_TO_WATCH_LOADING
  | TypesNames.FREE_TO_WATCH_DATA
  | TypesNames.FREE_TO_WATCH_ERROR
  | TypesNames.LATEST_TRAILERS_LOADING
  | TypesNames.LATEST_TRAILERS_DATA
  | TypesNames.LATEST_TRAILERS_ERROR
  | TypesNames.TRENDING_LOADING
  | TypesNames.TRENDING_DATA
  | TypesNames.TRENDING_ERROR
  | TypesNames.RESET_PAGING;

export interface ActionParamTypes extends Action<ActionTypes> {
  popularMoviesData: { popularMovies: MovieTypeProps[]; page: number };
  error: { error: string };
}

const { Types, Creators } = createActions({
  whatsPopularData: ['popularMoviesData'],
  whatsPopularLoading: ['endpoint'],
  whatsPopularError: ['error'],
  resetPaging: [''],
});

export const PopularTypes = Types;
export default Creators;

export interface AuthStateTypes {
  popularMovies: MovieTypeProps[];
  popularLoading: boolean;
  popularPaging: number;
  error: string | null;
}

export const INITIAL_STATE: ImmutableObject<AuthStateTypes> = Immutable({
  popularMovies: [],
  popularLoading: false,
  popularPaging: 1,
  error: null,
});

export const PopularMoviesSelector = {
  getPopularMovies: (state: RootState) => state.popularMovies,
};

export const setPopularMoviesLoading = (
  state: ImmutableObject<AuthStateTypes>,
) => {
  return state.merge({ ...state, popularLoading: true });
};

export const setPopularMovies = (
  state: ImmutableObject<AuthStateTypes>,
  { popularMoviesData: { popularMovies, page } }: ActionParamTypes,
) => {
  return state.merge({
    ...state,
    popularLoading: false,
    popularMovies:
      page === 1 ? popularMovies : [...state.popularMovies, ...popularMovies],
    popularPaging: page,
  });
};

export const setError = (
  state: ImmutableObject<AuthStateTypes>,
  { error: { error } }: ActionParamTypes,
) => {
  return state.merge({
    ...state,
    popularLoading: false,
    error: error,
  });
};

export const resetPaging = (state: ImmutableObject<AuthStateTypes>) => {
  return state.merge({
    ...state,
    popularPaging: 1,
  });
};

export const popularMoviesReducer = createReducer(INITIAL_STATE, {
  [Types.WHATS_POPULAR_LOADING]: setPopularMoviesLoading,
  [Types.WHATS_POPULAR_DATA]: setPopularMovies,
  [Types.WHATS_POPULAR_ERROR]: setError,
  [Types.RESET_PAGING]: resetPaging,
});
