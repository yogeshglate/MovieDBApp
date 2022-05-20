import { Action } from 'redux';
import { createActions, createReducer } from 'reduxsauce';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { ActionTypes, DetailsProps } from '../constants';
import { RootState } from '../redux';

export interface ActionParamTypes extends Action<ActionTypes> {
  movieDetailsData: { movieDetails: DetailsProps };
  error: { error: string };
}

const { Types, Creators } = createActions({
  detailsMovieData: ['movieDetailsData'],
  detailsMovieLoading: ['endpoint'],
  detailsMovieError: ['error'],
});

export const MovieDetailsTypes = Types;
export default Creators;

export interface AuthStateTypes {
  movieDetails: DetailsProps | null;
  movieLoading: boolean;
  movieError: string | null;
}

export const INITIAL_STATE: ImmutableObject<AuthStateTypes> = Immutable({
  movieDetails: null,
  movieLoading: false,
  movieError: null,
});

export const MovieDetailsSelector = {
  getMovieDetailsState: ({ movieDetailsState }: RootState) => movieDetailsState,
};

export const setMovieDetailsLoading = (
  state: ImmutableObject<AuthStateTypes>,
) => {
  return state.merge({ ...state, movieLoading: true });
};

export const setMovieDetails = (
  state: ImmutableObject<AuthStateTypes>,
  { movieDetailsData: { movieDetails } }: ActionParamTypes,
) => {
  return state.merge({
    ...state,
    movieLoading: false,
    movieDetails: movieDetails,
  });
};

export const setError = (
  state: ImmutableObject<AuthStateTypes>,
  { error: { error } }: ActionParamTypes,
) => {
  return state.merge({
    ...state,
    movieLoading: false,
    movieError: error,
  });
};

export const movieDetailsReducer = createReducer(INITIAL_STATE, {
  [Types.DETAILS_MOVIE_LOADING]: setMovieDetailsLoading,
  [Types.DETAILS_MOVIE_DATA]: setMovieDetails,
  [Types.DETAILS_MOVIE_ERROR]: setError,
});
