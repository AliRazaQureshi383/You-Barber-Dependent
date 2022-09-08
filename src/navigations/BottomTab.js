import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../constants';
import Account from '../screens/Account/index';
import Notification from '../screens/Notification/index';
import BookingTabs from './BookingTabs';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}>
      <Tab.Screen
        name="BookingTabs"
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/images/Booking.png')}
                resizeMode="contain"
                style={[
                  styles.img,
                  {tintColor: focused ? colors.parrot : 'grey'},
                ]}
              />
              <Text style={{color: focused ? colors.parrot : 'grey'}}>
                Booking
              </Text>
            </View>
          ),
        }}
        component={BookingTabs}
      />
      <Tab.Screen
        name="Notification"
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/images/Notification.png')}
                resizeMode="contain"
                style={[
                  styles.img,
                  {tintColor: focused ? colors.parrot : 'grey'},
                ]}></Image>
              <Text style={{color: focused ? colors.parrot : 'grey'}}>
                Notifications
              </Text>
            </View>
          ),
        }}
        component={Notification}
      />
      <Tab.Screen
        name="Account"
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/images/Accounts.png')}
                resizeMode="contain"
                style={[
                  styles.img,
                  {tintColor: focused ? colors.parrot : 'grey'},
                ]}></Image>
              <Text style={{color: focused ? colors.parrot : 'grey'}}>
                Account
              </Text>
            </View>
          ),
        }}
        component={Account}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  img: {
    height: wp(5),
    width: wp(5),
    alignSelf: 'center',
  },
});

export default BottomTab;
