import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {navigationStrings} from '../constants';
import {DetailsScreen, HomeScreen} from '../modules';

const Stack = createNativeStackNavigator<RootStackParams>();
const {HOME, DETAILS} = navigationStrings;

export type RootStackParams = {
  [HOME]: undefined;
  [DETAILS]: {id: string | number} | undefined;
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HOME}>
        <Stack.Screen name={HOME} component={HomeScreen} />
        <Stack.Screen name={DETAILS} component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
