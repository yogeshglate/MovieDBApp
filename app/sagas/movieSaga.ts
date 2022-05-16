import { put, takeLatest } from 'redux-saga/effects';
import { AppConstant, MovieTypeProps } from '../constants';
import {
  FreeMovieActions,
  FreeToWatchTypes,
  LatestTrailersActions,
  LatestTrailersTypes,
  PopularMovieActions,
  PopularTypes,
  TrendingMovieActions,
  TrendingMovieTypes,
} from '../redux';
import { apiConfig, getError } from '../services/Utils';

type SagaProps = {
  endpoint: string;
  type: string;
};
export interface ApiDataProps {
  data: {
    results: Array<MovieTypeProps>;
    page: number;
    total_pages: number;
  };
  ok: boolean;
  status: number;
  problem: string;
  status_message: string;
}

const api = apiConfig(AppConstant.baseUrl);

function* fetchPopularMovies({ endpoint }: SagaProps) {
  const popularMovies: ApiDataProps = yield api.get(endpoint);
  const {
    data: { results: movies, page },
    status,
  } = popularMovies;

  const error: string | boolean = yield getError(status);
  if (!error) {
    yield put(
      PopularMovieActions.whatsPopularData({
        popularMovies: movies,
        page: page,
      }),
    );
  } else {
    yield put(PopularMovieActions.error({ error: error }));
  }
}

function* fetchFreeToWatchMovies({ endpoint }: SagaProps) {
  const freeToWatchMovies: ApiDataProps = yield api.get(endpoint);
  const {
    data: { results: movies, page },
    status,
  } = freeToWatchMovies;
  const error: string | boolean = yield getError(status);
  if (!error) {
    yield put(
      FreeMovieActions.freeToWatchData({
        freeMovies: movies,
        page: page,
      }),
    );
  } else {
    yield put(FreeMovieActions.freeToWatchError({ error: error }));
  }
}

function* fetchLatestTrailers({ endpoint }: SagaProps) {
  const latestTrailers: ApiDataProps = yield api.get(endpoint);
  const {
    data: { results: movies, page },
    status,
  } = latestTrailers;

  const error: string | boolean = yield getError(status);
  if (!error) {
    yield put(
      LatestTrailersActions.latestTrailersData({
        latestTrailers: movies,
        page: page,
      }),
    );
  } else {
    yield put(LatestTrailersActions.latestTrailersError({ error: error }));
  }
}

function* fetchTrendingMovies({ endpoint }: SagaProps) {
  const trendingMovies: ApiDataProps = yield api.get(endpoint);
  const {
    data: { results: movies, page },
    status,
  } = trendingMovies;
  const error: string | boolean = yield getError(status);

  if (!error) {
    yield put(
      TrendingMovieActions.trendingData({
        trendingMovies: movies,
        page: page,
      }),
    );
  } else {
    yield put(TrendingMovieActions.trendingError({ error: error }));
  }
}

export default [
  takeLatest(PopularTypes.WHATS_POPULAR_LOADING, fetchPopularMovies),
  takeLatest(FreeToWatchTypes.FREE_TO_WATCH_LOADING, fetchFreeToWatchMovies),
  takeLatest(LatestTrailersTypes.LATEST_TRAILERS_LOADING, fetchLatestTrailers),
  takeLatest(TrendingMovieTypes.TRENDING_LOADING, fetchTrendingMovies),
];
