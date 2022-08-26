import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import BottomTab from '../../navigations/BottomTab';

const index = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};

export default index;
