import strings from './strings';

export const staticData = {
  whatsPopularData: [
    { label: 'Streaming', value: 'streaming' },
    { label: 'On TV', value: 'onTv' },
    { label: 'For Rent', value: 'forRent' },
    { label: 'In Theatres', value: 'inTheatres' },
  ],
  freeToWatchData: [
    {
      label: 'Movies',
      value: 'movies',
    },
    {
      label: 'TV',
      value: 'tv',
    },
  ],
  trendingData: [
    { label: 'Today', value: 'today' },
    { label: 'This Week', value: 'thisWeek' },
  ],
};

export const flatListData = [
  { title: strings.whatsPopular, dropDownData: staticData.whatsPopularData },
  { title: strings.freeToWatch, dropDownData: staticData.freeToWatchData },
  { title: strings.latestTrailers, dropDownData: staticData.whatsPopularData },
  { title: strings.trending, dropDownData: staticData.trendingData },
];

export const temporaryCardData = [
  { id: 1, value: 10 },
  { id: 2, value: 10 },
  { id: 3, value: 10 },
  { id: 4, value: 10 },
  { id: 5, value: 10 },
];
