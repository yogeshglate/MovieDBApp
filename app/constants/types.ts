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
