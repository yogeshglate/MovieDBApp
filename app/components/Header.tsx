import React from 'react';
import { Image, Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors, Images } from '../theme';
import { styles } from './styles/HeaderStyles';

type HeaderProps = {
  leftIcon: string;
  rightIcon?: string;
  onPress?: () => void;
};

const Header = ({ leftIcon, rightIcon, onPress }: HeaderProps) => {
  return (
    <View
      style={
        rightIcon
          ? styles.headerContainer
          : { ...styles.headerContainer, ...styles.paddingRight }
      }>
      <Pressable onPress={onPress}>
        <Icon name={leftIcon} color={Colors.white} size={22} />
      </Pressable>
      <Image source={Images.headerLogo} style={styles.headerLogo} />
      {rightIcon && (
        <Icon name={rightIcon} color={Colors.filterTextGradient2} size={24} />
      )}
    </View>
  );
};

export default Header;
