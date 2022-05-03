import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, compose, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../redux/index';
import rootSaga from '../sagas';
import immutablePersistenceTransform from '../services/immutablePersistenceTransform';

const sagaMonitor = undefined;
const sagaMiddleware = createSagaMiddleware({sagaMonitor});
const middleWare = [sagaMiddleware];

const persistConfig = {
  key: '@movieDB',
  storage: AsyncStorage,
  blacklist: ['nav', 'navigation', 'auth'],
  transforms: [immutablePersistenceTransform],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Add middleware to redux store
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = applyMiddleware(...middleWare);

const enhancers = __DEV__
  ? composeEnhancers(middlewares)
  : compose(middlewares);

const store = createStore(persistedReducer, enhancers);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

// Enable persistence
export default {store, persistor};
