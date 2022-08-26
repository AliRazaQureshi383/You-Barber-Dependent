import { View, Text } from 'react-native'
import React from 'react'
import SignIn from './src/screens/SignIn/index'
import Notification from  './src/screens/Notification/index'
import {Provider} from 'react-redux';
import {useSelector} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import  {store} from './src/redux/store/store';
import {persistor} from  "./src/redux/store/store";
import Home from './src/screens/Home/index'



const Temp = () => {
  const value = useSelector((state)=> state);
 
 
  return  (value?.email  && value?.password)  ?   <Home /> : <SignIn />
 
  
 };


const App = () => {
  return  (
    <View style={{flex: 1}}>
    <Provider store={store}>
      <PersistGate loading={<Text>Loading ...</Text>}  persistor={persistor}>
      <Temp />
      </PersistGate>
    </Provider>
  </View>

  );

}

export default App