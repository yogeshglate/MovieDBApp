import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import { navigationStrings, strings } from '../constants';
import { RootStackParams } from '../navigation/AppNavigation';
import { DefaultStyles } from '../theme';

type DetailsScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParams>;
  route: RouteProp<RootStackParams, navigationStrings.DETAILS>;
};

const Details = ({ navigation: { navigate }, route }: DetailsScreenProps) => {
  const { HOME } = navigationStrings;
  const { params } = route;

  return (
    <SafeAreaView style={DefaultStyles.container}>
      <Text>
        {strings.detailsScreen} {params?.id}
      </Text>
      <Button title={strings.homeScreen} onPress={() => navigate(HOME)} />
    </SafeAreaView>
  );
};

export default Details;
