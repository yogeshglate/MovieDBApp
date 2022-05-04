import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {constants, navigationStrings} from '../constants';
import {RootStackParams} from '../navigation/AppNavigation';
import {DefaultStyles} from '../theme';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParams>;
};

const Home = ({navigation: {navigate}}: HomeScreenProps) => {
  const {homeScreen, detailsScreen} = constants;

  return (
    <View style={DefaultStyles.container}>
      <Text>{homeScreen}</Text>
      <Button
        title={detailsScreen}
        onPress={() => navigate(navigationStrings.DETAILS, {id: '1001'})}
      />
    </View>
  );
};

export default Home;
