import React from 'react';
import Booking from '../screens/Booking/index';
import BookingDetails from '../screens/BookingDetails/index';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const BookingTabs = () => {
  return (
    <Stack.Navigator initialRouteName="Booking">
      <Stack.Screen
        options={{headerShown: false}}
        name="Booking"
        component={Booking}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="BookingDetails"
        component={BookingDetails}
      />
    </Stack.Navigator>
  );
};

export default BookingTabs;
