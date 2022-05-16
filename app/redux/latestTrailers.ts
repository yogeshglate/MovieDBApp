import { Action } from 'redux';
import { createActions, createReducer } from 'reduxsauce';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { ActionTypes, MovieTypeProps } from '../constants';
import { RootState } from '../redux';

export interface ActionParamTypes extends Action<ActionTypes> {
  latestTrailersData: { latestTrailers: MovieTypeProps[]; page: number };
  error: { error: string };
}

const { Types, Creators } = createActions({
  latestTrailersData: ['latestTrailersData'],
  latestTrailersLoading: ['endpoint'],
  latestTrailersError: ['error'],
  resetPaging: [''],
});

export const LatestTrailersTypes = Types;
export default Creators;

export interface AuthStateTypes {
  latestTrailers: MovieTypeProps[];
  latestTrailersLoading: boolean;
  error: string | null;
  latestTrailersPaging: number;
}

export const INITIAL_STATE: ImmutableObject<AuthStateTypes> = Immutable({
  latestTrailers: [],
  latestTrailersLoading: false,
  error: null,
  latestTrailersPaging: 1,
});

export const LatestTrailersSelector = {
  getLatestTrailersState: ({ latestTrailersState }: RootState) =>
    latestTrailersState,
};

export const setLatestTrailersLoading = (
  state: ImmutableObject<AuthStateTypes>,
) => {
  return state.merge({ ...state, latestTrailersLoading: true });
};

export const setLatestTrailers = (
  state: ImmutableObject<AuthStateTypes>,
  { latestTrailersData: { latestTrailers, page } }: ActionParamTypes,
) => {
  return state.merge({
    ...state,
    latestTrailersLoading: false,
    latestTrailers:
      page === 1
        ? latestTrailers
        : [...state.latestTrailers, ...latestTrailers],
    latestTrailersPaging: page,
  });
};

export const setError = (
  state: ImmutableObject<AuthStateTypes>,
  { error: { error } }: ActionParamTypes,
) => {
  return state.merge({
    ...state,
    latestTrailersLoading: false,
    error: error,
  });
};

export const resetPaging = (state: ImmutableObject<AuthStateTypes>) => {
  return state.merge({
    ...state,
    latestTrailersPaging: 1,
  });
};

export const latestTrailerReducer = createReducer(INITIAL_STATE, {
  [Types.LATEST_TRAILERS_LOADING]: setLatestTrailersLoading,
  [Types.LATEST_TRAILERS_DATA]: setLatestTrailers,
  [Types.LATEST_TRAILERS_ERROR]: setError,
  [Types.RESET_PAGING]: resetPaging,
});
