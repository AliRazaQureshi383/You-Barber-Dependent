import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../constants';
import Account from '../screens/Account/index';
import Booking from '../screens/Booking/index';
import Notification from '../screens/Notification/index';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}>
      <Tab.Screen
        name="Booking"
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
        component={Booking}
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
