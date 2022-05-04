import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import AppNavigation from './navigation/AppNavigation';
import {PersistGate} from 'redux-persist/es/integration/react';
import movieDBStore from './redux/store';

const App = () => {
  const {store, persistor} = movieDBStore;

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
