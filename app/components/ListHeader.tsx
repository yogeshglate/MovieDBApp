import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch } from 'react-redux';
import { strings } from '../constants';
import MovieActions from '../redux/movieRedux';
import { Colors } from '../theme';
import { styles } from './styles/ListHeaderStyles';

export interface ListHeaderProp {
  title: string;
  dropDownData: { label: string; value: string; endpoint: string }[];
  color?: string;
}
interface DropdownSelectedProp {
  endpoint: string;
}

const ListHeader = ({ title, dropDownData, color }: ListHeaderProp) => {
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
    title === strings.freeToWatch &&
      dispatch(MovieActions.freeToWatchLoading(endpoint));
    title === strings.trending &&
      dispatch(MovieActions.trendingLoading(endpoint));
    title === strings.whatsPopular &&
      dispatch(MovieActions.whatsPopularLoading(endpoint));
    title === strings.latestTrailers &&
      dispatch(MovieActions.latestTrailersLoading(endpoint));
  }, [endpoint, dispatch, title]);

  useEffect(() => {
    fetchData();
  }, [endpoint, fetchData]);

  const dropdownBackgroundStyle = StyleSheet.flatten([
    styles.dropdown,
    title === strings.latestTrailers && {
      backgroundColor: Colors.filterTextGradient2,
    },
  ]);

  const plachholderTitleStyle = StyleSheet.flatten([
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
        placeholderStyle={plachholderTitleStyle}
        onSelectItem={(selectedItem: DropdownSelectedProp) =>
          setEndPoint(selectedItem.endpoint)
        }
      />
    </View>
  );
};

export default ListHeader;
