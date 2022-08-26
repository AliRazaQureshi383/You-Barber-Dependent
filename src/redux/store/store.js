import {applyMiddleware, createStore} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {mainReducre} from '../reducer/reducer';

import {persistStore, persistReducer} from 'redux-persist';
 
const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, mainReducre);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);


