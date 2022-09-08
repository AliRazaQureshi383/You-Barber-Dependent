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
import CustomText from './src/components/CustomText'



const Temp = () => {
  const value = useSelector((state)=> state);
  // console.log('value ', value ) 
 
  return  (value?.loginReducer.email  && value?.loginReducer.password)  ?   <Home /> : <SignIn />
 
  
 };


const App = () => {
  return  (
    <View style={{flex: 1}}>
    <Provider store={store}>
      <PersistGate loading={<CustomText>Loading ...</CustomText>}  persistor={persistor}>
      <Temp />
    
      </PersistGate>
    </Provider>
  </View>

  );

}

export default App