import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {DefaultStyles} from './theme';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={DefaultStyles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default App;
