import apisauce from 'apisauce';
import { ImmutableArray } from 'seamless-immutable';
import { AppConstant, MovieTypeProps, strings } from '../constants';
import { DetailsAPIProps } from '../sagas/movieSaga';

export const apiConfig = (baseURL: string) =>
  apisauce.create({
    baseURL,
    timeout: 30000,
    headers: { 'Cache-Control': strings.noCache },
  });

export async function getError(status: number) {
  switch (status) {
    case AppConstant.SUCCESS_CODE:
      return false;
    case AppConstant.KEY_ERROR:
      return strings.keyError;
    case AppConstant.NOT_FOUND:
      return strings.notFoundError;
    default:
      return strings.somethingWrong;
  }
}

export const filterDetailsData = ({
  data: {
    casts,
    content_ratings,
    created_by = [],
    runtime,
    episode_run_time = [runtime],
    first_air_date,
    genres,
    original_name,
    original_title,
    release_dates,
    vote_average,
    poster_path,
    backdrop_path,
    overview,
    id,
    release_date,
  },
}: DetailsAPIProps) => {
  const release_year_movie = getYear(release_date);
  const release_year_tv = getYear(first_air_date);
  const genre = getGenres(genres);
  const backdropImage = backdrop_path;
  const posterImage = poster_path;
  const progressValue = vote_average * 10;
  const overView = overview;
  const movieId = id;
  const movieRuntime = episode_run_time[0];
  const movieTitle = original_title ?? original_name;
  const movieCertification = getMovieRating(release_dates);
  const tvCertification = getTvRating(content_ratings);
  const directorName = getDirector(casts);
  const creatorName = created_by[0]?.name;

  return {
    id: movieId,
    backdrop: backdropImage,
    poster: posterImage,
    title: movieTitle,
    release_year: release_year_movie || release_year_tv,
    progressValue: progressValue,
    certification: tvCertification ?? movieCertification,
    director: directorName ?? creatorName,
    runtime: movieRuntime,
    overview: overView,
    genre: genre,
    release_date: release_date,
  };
};

const getYear = (date: string) => {
  return new Date(date).getFullYear();
};
const getGenres = (genres: DetailsAPIProps['data']['genres']) => {
  return genres?.map(item => item?.name).toString();
};

const getMovieRating = (
  release_dates: DetailsAPIProps['data']['release_dates'],
) => {
  return release_dates?.results?.filter(
    item => item?.iso_3166_1 === strings.us,
  )[0]?.release_dates[0]?.certification;
};

const getTvRating = (
  content_ratings: DetailsAPIProps['data']['content_ratings'],
) => {
  return content_ratings?.results?.filter(
    item => item?.iso_3166_1 === strings.us,
  )[0]?.rating;
};

const getDirector = (casts: DetailsAPIProps['data']['casts']) => {
  return casts?.crew?.filter(item => item?.job === strings.director)[0]?.name;
};

export const getLoading = (length: number, paging: number) => {
  return length < 20 && paging === 1 ? true : false;
};

export const getUniqueMovies = (
  oldMovies: ImmutableArray<MovieTypeProps>,
  newMovies: MovieTypeProps[],
) => {
  const apiData = [...oldMovies, ...newMovies];
  const uniqueMovies = [
    ...new Map(apiData.map(item => [item.id, item])).values(),
  ];

  return uniqueMovies;
};
