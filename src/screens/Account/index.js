import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../redux/actions/action';
import {styles} from './style';

const Index = () => {
  const test = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      <View style={styles.greenContainer}></View>
      <View style={styles.whiteContainer}></View>

      <View style={styles.viewContainer}>
        <Image
          source={require('../../assets/images/male.png')}
          style={styles.userImg}></Image>
        <Text style={styles.name}>Jack Reacher </Text>
        <Text style={styles.email}>{test.email}</Text>
      </View>

      <View style={styles.viewContainer2}>
        <TouchableOpacity
          onPress={() => dispatch(logout())}
          style={styles.loginBtn}>
          <View style={styles.loginGreenView}>
            <Image
              source={require('../../assets/images/logout.png')}
              style={styles.loginImage}></Image>
          </View>

          <View style={styles.loginTextView}>
            <Text style={styles.loginText}> Log out </Text>

            <Image
              source={require('../../assets/images/next.png')}
              style={styles.nextimg}></Image>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;
