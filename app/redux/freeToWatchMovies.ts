import { Action } from 'redux';
import { createActions, createReducer } from 'reduxsauce';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { ActionTypes, MovieTypeProps } from '../constants';
import { RootState } from '../redux';
import { getLoading, getMovies } from '../services/Utils';

export interface ActionParamTypes extends Action<ActionTypes> {
  freeMoviesData: { freeMovies: MovieTypeProps[]; page: number };
  error: { error: string };
}

const { Types, Creators } = createActions({
  freeToWatchData: ['freeMoviesData'],
  freeToWatchLoading: ['endpoint'],
  freeToWatchError: ['error'],
  resetPaging: [''],
});

export const FreeToWatchTypes = Types;
export default Creators;

export interface AuthStateTypes {
  freeToWatchMovies: MovieTypeProps[];
  freeToWatchLoading: boolean;
  error: string | null;
  freeToWatchPaging: number;
}

export const INITIAL_STATE: ImmutableObject<AuthStateTypes> = Immutable({
  freeToWatchMovies: [],
  freeToWatchLoading: false,
  error: null,
  freeToWatchPaging: 1,
});

export const FreeToWatchSelector = {
  getFreeToWatchMoviesState: ({ freeToWatchMoviesState }: RootState) =>
    freeToWatchMoviesState,
};

export const setFreeToWatchLoading = (
  state: ImmutableObject<AuthStateTypes>,
) => {
  return state.merge({
    ...state,
    freeToWatchLoading: getLoading(
      state.freeToWatchMovies.length,
      state.freeToWatchPaging,
    ),
  });
};

export const setFreeToWatchMovies = (
  state: ImmutableObject<AuthStateTypes>,
  { freeMoviesData: { freeMovies, page } }: ActionParamTypes,
) => {
  const movies = getMovies(state.freeToWatchMovies, freeMovies);

  return state.merge({
    ...state,
    freeToWatchLoading: false,
    freeToWatchMovies: page === 1 ? freeMovies : movies,
    freeToWatchPaging: page,
  });
};

export const setError = (
  state: ImmutableObject<AuthStateTypes>,
  { error: { error } }: ActionParamTypes,
) => {
  return state.merge({
    ...state,
    freeToWatchLoading: false,
    error: error,
  });
};

export const resetPaging = (state: ImmutableObject<AuthStateTypes>) => {
  return state.merge({
    ...state,
    freeToWatchPaging: 1,
  });
};

export const freeToWatchReducer = createReducer(INITIAL_STATE, {
  [Types.FREE_TO_WATCH_LOADING]: setFreeToWatchLoading,
  [Types.FREE_TO_WATCH_DATA]: setFreeToWatchMovies,
  [Types.FREE_TO_WATCH_ERROR]: setError,
  [Types.RESET_PAGING]: resetPaging,
});
