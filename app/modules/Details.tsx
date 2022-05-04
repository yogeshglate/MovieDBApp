import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {constants, navigationStrings} from '../constants';
import {RootStackParams} from '../navigation/AppNavigation';
import {DefaultStyles} from '../theme';

type DetailsScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParams>;
  route: RouteProp<RootStackParams, navigationStrings.DETAILS>;
};

const Details = ({navigation: {navigate}, route}: DetailsScreenProps) => {
  const {HOME} = navigationStrings;
  const {params} = route;

  return (
    <View style={DefaultStyles.container}>
      <Text>
        {constants.detailsScreen} {params?.id}
      </Text>
      <Button title={constants.homeScreen} onPress={() => navigate(HOME)} />
    </View>
  );
};

export default Details;
