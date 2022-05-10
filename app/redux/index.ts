import { combineReducers } from 'redux';
import { movieReducer } from './movieRedux';

export const rootReducer = combineReducers({ movies: movieReducer });
export type RootState = ReturnType<typeof rootReducer>;
