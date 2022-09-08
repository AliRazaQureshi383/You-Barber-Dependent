import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LogoutBtn from '../../assets/icons/logout.svg';
import LogoutNext from '../../assets/icons/logoutNxt.svg';
import CustomText from '../../components/CustomText';
import { logout } from '../../redux/reducer/reducer';
import { styles } from './style';

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
        <CustomText style={styles.name}>Jack Reacher </CustomText>
        <CustomText style={styles.email}>{test.loginReducer.email}</CustomText>
      </View>

      <View style={styles.viewContainer2}>
        <TouchableOpacity
          onPress={() => dispatch(logout())}
          style={styles.loginBtn}>
          <View style={styles.loginGreenView}>
            <LogoutBtn />
          </View>

          <View style={styles.loginTextView}>
            <CustomText style={styles.loginText}> Log out </CustomText>
            <View style={styles.center}>
              <LogoutNext />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;
