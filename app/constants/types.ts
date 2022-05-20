enum TypesNames {
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
  MOVIE_DETAILS_DATA = 'MOVIE_DETAILS_DATA',
  MOVIE_DETAILS_LOADING = 'MOVIE_DETAILS_LOADING',
  MOVIE_DETAILS_ERROR = 'MOVIE_DETAILS_ERROR',
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
  | TypesNames.MOVIE_DETAILS_DATA
  | TypesNames.MOVIE_DETAILS_ERROR
  | TypesNames.MOVIE_DETAILS_ERROR
  | TypesNames.RESET_PAGING;

export interface DetailsProps {
  adult: boolean;
  backdrop_path: string;
  casts: { crew: Array<{ job: string; name: string }> };
  genres: Array<{ id: number; name: string }>;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_dates: {
    results: Array<{
      iso_3166_1: string;
      release_dates: Array<{ certification: string; release_date: string }>;
    }>;
  };
  title: string;
  vote_average: number;
  content_ratings: { results: Array<{ iso_3166_1: string; rating: string }> };
  created_by: Array<{ name: string }>;
  episode_run_time: Array<number>;
  first_air_date: string;
  original_name: string;
  runtime: number;
  release_date: string;
  progressValue: number;
  year: number;
  country: string;
  genre: string;
  certification: string;
  director: string;
  backdrop: string;
  poster: string;
}

export interface FilteredDetailsProps {
  id: number;
  backdrop: string;
  poster: string;
  title: string;
  release_year: number;
  progressValue: number;
  certification: string;
  director: string;
  runtime: number;
  overview: string;
  genre: string;
  release_date: string;
}
