import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { styles } from './styles/ListHeaderStyles';

export interface ListHeaderProp {
  title: string;
  dropDownData: { label: string; value: string }[];
}

const ListHeader = ({ title, dropDownData }: ListHeaderProp) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(dropDownData[0].value);
  const [items, setItems] = useState(dropDownData);

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

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{title}</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.dropdown}
        labelStyle={styles.dropdownLabel}
        containerStyle={styles.dropdownContainer}
        dropDownContainerStyle={styles.background}
        arrowIconStyle={styles.background}
        listItemLabelStyle={styles.listItems}
        showTickIcon={false}
        autoScroll={true}
        placeholder={dropDownData.find(item => value === item.value)?.label}
        placeholderStyle={styles.dropdownLabel}
      />
    </View>
  );
};

export default ListHeader;
