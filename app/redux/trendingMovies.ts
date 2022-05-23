import { Action } from 'redux';
import { createActions, createReducer } from 'reduxsauce';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { ActionTypes, MovieTypeProps } from '../constants';
import { RootState } from '../redux';
import { getLoading, getUniqueMovies } from '../services/Utils';

export interface ActionParamTypes extends Action<ActionTypes> {
  trendingMoviesData: { trendingMovies: MovieTypeProps[]; page: number };
  error: { error: string };
}

const { Types, Creators } = createActions({
  trendingData: ['trendingMoviesData'],
  trendingLoading: ['endpoint'],
  trendingError: ['error'],
  resetPaging: [''],
});

export const TrendingMovieTypes = Types;
export default Creators;

export interface AuthStateTypes {
  trendingMovies: MovieTypeProps[];
  trendingLoading: boolean;
  error: string | null;
  trendingPaging: number;
}

export const INITIAL_STATE: ImmutableObject<AuthStateTypes> = Immutable({
  trendingMovies: [],
  trendingLoading: false,
  error: null,
  trendingPaging: 1,
});

export const TrendingMoviesSelector = {
  getTrendingMoviesState: ({ trendingMoviesState }: RootState) =>
    trendingMoviesState,
};

export const setTrendingLoading = (state: ImmutableObject<AuthStateTypes>) => {
  return state.merge({
    ...state,
    trendingLoading: getLoading(
      state.trendingMovies.length,
      state.trendingPaging,
    ),
  });
};

export const setTrendingMovies = (
  state: ImmutableObject<AuthStateTypes>,
  { trendingMoviesData: { trendingMovies, page } }: ActionParamTypes,
) => {
  const movies = getUniqueMovies(state.trendingMovies, trendingMovies);

  return state.merge({
    ...state,
    trendingLoading: false,
    trendingMovies: page === 1 ? trendingMovies : movies,
    trendingPaging: page,
  });
};

export const setError = (
  state: ImmutableObject<AuthStateTypes>,
  { error: { error } }: ActionParamTypes,
) => {
  return state.merge({
    ...state,
    trendingLoading: false,
    error: error,
  });
};

export const resetPaging = (state: ImmutableObject<AuthStateTypes>) => {
  return state.merge({
    ...state,
    trendingPaging: 1,
  });
};

export const trendingMoviesReducer = createReducer(INITIAL_STATE, {
  [Types.TRENDING_LOADING]: setTrendingLoading,
  [Types.TRENDING_DATA]: setTrendingMovies,
  [Types.TRENDING_ERROR]: setError,
  [Types.RESET_PAGING]: resetPaging,
});
