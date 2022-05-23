import { Action } from 'redux';
import { createActions, createReducer } from 'reduxsauce';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { ActionTypes, MovieTypeProps } from '../constants';
import { RootState } from '../redux';
import { getLoading, getUniqueMovies } from '../services/Utils';

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
  getPopularMoviesState: ({ popularMoviesState }: RootState) =>
    popularMoviesState,
};

export const setPopularMoviesLoading = (
  state: ImmutableObject<AuthStateTypes>,
) => {
  return state.merge({
    ...state,
    popularLoading: getLoading(state.popularMovies.length, state.popularPaging),
  });
};

export const setPopularMovies = (
  state: ImmutableObject<AuthStateTypes>,
  { popularMoviesData: { popularMovies, page } }: ActionParamTypes,
) => {
  const movies = getUniqueMovies(state.popularMovies, popularMovies);

  return state.merge({
    ...state,
    popularLoading: false,
    popularMovies: page === 1 ? popularMovies : movies,
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
