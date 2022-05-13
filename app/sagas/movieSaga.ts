import { put, takeLatest } from 'redux-saga/effects';
import { AppConstant } from '../constants';
import { MovieTypeProps } from '../constants/staticData';
import MovieActions, { MovieTypes } from '../redux/movieRedux';
import { apiConfig, getError } from '../services/Utils';

type SagaProps = {
  endpoint: string;
  type: string;
};
export interface ApiDataProps {
  data: {
    results: Array<MovieTypeProps>;
  };
  page: number;
  total_pages: number;
  ok: boolean;
  status: number;
  problem: string;
  status_message: string;
}

const api = apiConfig(AppConstant.baseUrl);

function* fetchPopularMovies({ endpoint }: SagaProps) {
  const popularMovies: ApiDataProps = yield api.get(endpoint);
  const {
    data: { results: movies },
  } = popularMovies;
  const error: string | boolean = yield getError(popularMovies);
  if (!error) {
    yield put(
      MovieActions.whatsPopular({
        popularMovies: movies,
      }),
    );
  } else {
    yield put(MovieActions.error({ error: error }));
  }
}

function* fetchFreeToWatchMovies({ endpoint }: SagaProps) {
  const freeToWatchMovies: ApiDataProps = yield api.get(endpoint);
  const {
    data: { results: movies },
  } = freeToWatchMovies;
  const error: string | boolean = yield getError(freeToWatchMovies);
  if (!error) {
    yield put(
      MovieActions.freeToWatch({
        freeMovies: movies,
      }),
    );
  } else {
    yield put(MovieActions.error({ error: error }));
  }
}

function* fetchLatestTrailers({ endpoint }: SagaProps) {
  const latestTrailers: ApiDataProps = yield api.get(endpoint);
  const {
    data: { results: movies },
  } = latestTrailers;
  const error: string | boolean = yield getError(latestTrailers);
  if (!error) {
    yield put(
      MovieActions.latestTrailers({
        latestTrailers: movies,
      }),
    );
  } else {
    yield put(MovieActions.error({ error: error }));
  }
}

function* fetchTrendingMovies({ endpoint }: SagaProps) {
  const trendingMovies: ApiDataProps = yield api.get(endpoint);
  const {
    data: { results: movies },
  } = trendingMovies;
  const error: string | boolean = yield getError(trendingMovies);

  if (!error) {
    yield put(
      MovieActions.trending({
        trendingMovies: movies,
      }),
    );
  } else {
    yield put(MovieActions.error({ error: error }));
  }
}

export default [
  takeLatest(MovieTypes.WHATS_POPULAR_LOADING, fetchPopularMovies),
  takeLatest(MovieTypes.FREE_TO_WATCH_LOADING, fetchFreeToWatchMovies),
  takeLatest(MovieTypes.LATEST_TRAILERS_LOADING, fetchLatestTrailers),
  takeLatest(MovieTypes.TRENDING_LOADING, fetchTrendingMovies),
];
