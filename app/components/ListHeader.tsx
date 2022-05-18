import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch } from 'react-redux';
import {
  FreeMovieActions,
  LatestTrailersActions,
  PopularMovieActions,
  TrendingMovieActions,
} from '../redux';
import { strings } from '../constants';
import { Colors } from '../theme';
import { styles } from './styles/ListHeaderStyles';

export interface ListHeaderProp {
  title: string;
  dropDownData: { label: string; value: string; endpoint: string }[];
  color?: string;
  trailerEndPoint: React.Dispatch<React.SetStateAction<string>>;
  freeToWatchEndPoint: React.Dispatch<React.SetStateAction<string>>;
  whatsPopularEndPoint: React.Dispatch<React.SetStateAction<string>>;
  trendingEndPoint: React.Dispatch<React.SetStateAction<string>>;
}
interface DropdownSelectedProp {
  endpoint: string;
}

const ListHeader = ({
  title,
  dropDownData,
  color,
  freeToWatchEndPoint,
  trailerEndPoint,
  trendingEndPoint,
  whatsPopularEndPoint,
}: ListHeaderProp) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(dropDownData[0].value);
  const [items, setItems] = useState(dropDownData);
  const [endpoint, setEndPoint] = useState(dropDownData[0].endpoint);
  const dispatch = useDispatch();

  const updatedData = useCallback(() => {
    const filteredData = dropDownData.filter(item => {
      if (item.value !== value) {
        return item;
      }
    });
    return filteredData;
  }, [dropDownData, value]);

  useEffect(() => {
    setItems(updatedData());
  }, [updatedData]);

  const fetchData = useCallback(() => {
    switch (title) {
      case strings.freeToWatch:
        dispatch(FreeMovieActions.freeToWatchLoading(endpoint));
        break;
      case strings.trending:
        dispatch(TrendingMovieActions.trendingLoading(endpoint));
        break;
      case strings.whatsPopular:
        dispatch(PopularMovieActions.whatsPopularLoading(endpoint));
        break;
      case strings.latestTrailers:
        dispatch(LatestTrailersActions.latestTrailersLoading(endpoint));
    }
  }, [endpoint, dispatch, title]);

  useEffect(() => {
    fetchData();
  }, [endpoint, fetchData]);

  const updateTrailer = useCallback(() => {
    switch (title) {
      case strings.freeToWatch:
        freeToWatchEndPoint(endpoint);
        break;
      case strings.trending:
        trendingEndPoint(endpoint);
        break;
      case strings.whatsPopular:
        whatsPopularEndPoint(endpoint);
        break;
      case strings.latestTrailers:
        trailerEndPoint(endpoint);
        break;
    }
  }, [
    endpoint,
    freeToWatchEndPoint,
    title,
    trailerEndPoint,
    trendingEndPoint,
    whatsPopularEndPoint,
  ]);

  useEffect(() => {
    updateTrailer();
  }, [updateTrailer]);

  useEffect(() => {
    dispatch(LatestTrailersActions.resetPaging());
    dispatch(TrendingMovieActions.resetPaging());
    dispatch(PopularMovieActions.resetPaging());
    dispatch(FreeMovieActions.resetPaging());
  }, [dispatch]);

  const dropdownBackgroundStyle = StyleSheet.flatten([
    styles.dropdown,
    title === strings.latestTrailers && {
      backgroundColor: Colors.filterTextGradient2,
    },
  ]);

  const placeholderTitleStyle = StyleSheet.flatten([
    styles.dropdownLabel,
    title === strings.latestTrailers && { color: Colors.primary },
  ]);

  const listHeaderTitleStyle = StyleSheet.flatten([
    styles.headerText,
    title === strings.latestTrailers && { color: color },
  ]);

  return (
    <View style={styles.container}>
      <Text style={listHeaderTitleStyle}>{title}</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={dropdownBackgroundStyle}
        labelStyle={styles.dropdownLabel}
        containerStyle={styles.dropdownContainer}
        dropDownContainerStyle={styles.background}
        arrowIconStyle={styles.background}
        listItemLabelStyle={styles.listItems}
        showTickIcon={false}
        autoScroll={true}
        placeholder={dropDownData.find(item => value === item.value)?.label}
        placeholderStyle={placeholderTitleStyle}
        onSelectItem={(selectedItem: DropdownSelectedProp) =>
          setEndPoint(selectedItem.endpoint)
        }
      />
    </View>
  );
};

export default ListHeader;
