import { AppConstant } from '../constants';
import strings from './strings';

export const staticData = {
  whatsPopularData: [
    {
      label: 'Streaming',
      value: 'streaming',
      endpoint: `/movie/popular?api_key=${AppConstant.apiKey}`,
    },

    {
      label: 'On TV',
      value: 'onTv',
      endpoint: `/tv/popular?api_key=${AppConstant.apiKey}`,
    },

    {
      label: 'For Rent',
      value: 'forRent',
      endpoint: `/discover/movie?api_key=${AppConstant.apiKey}&sort_by=popularity.desc&include_adult=false&with_watch_monetization_types=rent`,
    },
    {
      label: 'In Theatres',
      value: 'inTheatres',
      endpoint: `/discover/movie?api_key=${AppConstant.apiKey}&include_adult=false&primary_release_date.gte=2022-04-01&primary_release_date=2022-05-15`,
    },
  ],
  freeToWatchData: [
    {
      label: 'Movies',
      value: 'movies',
      endpoint: `/discover/movie?api_key=${AppConstant.apiKey}&include_adult=false&with_watch_monetization_types=free&sort_by=revenue_asc`,
    },

    {
      label: 'TV',
      value: 'tv',
      endpoint: `/discover/tv?api_key=${AppConstant.apiKey}&include_adult=false&with_watch_monetization_types=free`,
    },
  ],
  latestTrailersData: [
    {
      label: 'Streaming',
      value: 'streaming',
      endpoint: `/discover/movie?api_key=${AppConstant.apiKey}&sort_by=release_date.asc&include_adult=false&include_video=true&page=1&release_date.gte=2022-05-15&with_watch_monetization_types=flatrate`,
    },

    {
      label: 'On TV',
      value: 'onTv',
      endpoint: `/discover/tv?api_key=${AppConstant.apiKey}&sort_by=release_date.asc&include_adult=false&include_video=true&page=1&release_date.gte=2022-05-15`,
    },
    {
      label: 'For Rent',
      value: 'forRent',
      endpoint: `/discover/movie?api_key=${AppConstant.apiKey}&sort_by=release_date.asc&include_adult=false&include_video=true&page=1&release_date.gte=2022-05-15&with_watch_monetization_types=rent`,
    },
    {
      label: 'In Theatres',
      value: 'inTheatres',
      endpoint: `/discover/movie?api_key=${AppConstant.apiKey}&include_adult=false&include_video=true&primary_release_date.gte=2022-04-01&primary_release_date=2022-05-15`,
    },
  ],
  trendingData: [
    {
      label: 'Today',
      value: 'today',
      endpoint: `/trending/all/day?api_key=${AppConstant.apiKey}`,
    },
    {
      label: 'This Week',
      value: 'thisWeek',
      endpoint: `/trending/all/week?api_key=${AppConstant.apiKey}`,
    },
  ],
};

export const flatListData = [
  {
    title: strings.whatsPopular,
    dropDownData: staticData.whatsPopularData,
  },
  {
    title: strings.freeToWatch,
    dropDownData: staticData.freeToWatchData,
  },
  {
    title: strings.latestTrailers,
    dropDownData: staticData.latestTrailersData,
  },
  {
    title: strings.trending,
    dropDownData: staticData.trendingData,
  },
];

export const temporaryCardData = [
  { id: 1, value: 10 },
  { id: 2, value: 10 },
  { id: 3, value: 10 },
  { id: 4, value: 10 },
  { id: 5, value: 10 },
];

export interface MovieTypeProps {
  adult?: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview?: string;
  popularity?: number;
  poster_path: string;
  release_date: string;
  title: string;
  video?: boolean;
  vote_average: number;
  vote_count?: number;
  first_air_date?: string;
  name?: string;
  origin_country?: Array<string>;
  original_name?: string;
  media_type?: string;
}
