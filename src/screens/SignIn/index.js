import React, {useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {styles} from './style';
import eyelash from '../../assets/images/eyelash.png';
import Show from '../../assets/images/Show.png';

import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {login} from '../../redux/actions/action';

const schema = Yup.object({
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),

  email: Yup.string()
    .email('invalid email format')
    .required('No password provided.'),
});

export default function index() {
  const dispatch = useDispatch();
  const data1 = useSelector(state => state.email);
  const data2 = useSelector(state => state.password);
  const [visibility, setVisibility] = useState(true);

  const [email, setEmail] = useState(data1);
  const [password, setPassword] = useState(data2);

  const showPass = () => {
    return visibility
      ? setVisibility(false) & setEye(Show)
      : setVisibility(true) & setEye(eyelash);
  };
  const [eye, setEye] = useState(eyelash);

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome Back! </Text>
        <Text style={styles.welcomMsg}>Please enter your account here</Text>

        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={valuse => {}}></Formik>

        <View style={styles.inputView}>
          <Image
            source={require('../../assets/images/Message.png')}
            style={styles.inputIcon}></Image>
          <TextInput
            style={styles.TextInput}
            placeholder="Email or phone number "
            onChangeText={email => setEmail(email)}></TextInput>
        </View>

        <View style={styles.inputView}>
          <Image
            source={require('../../assets/images/Lock.png')}
            style={styles.inputIcon}></Image>

          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            secureTextEntry={visibility}
            onChangeText={password => setPassword(password)}
          />
          <TouchableOpacity onPress={() => showPass()}>
            <Image source={eye} style={styles.inputIconRight}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.forgetPass}>
          <TouchableOpacity onPress={()=> console.log('ForgetPassword', )}>
            <Text> Forgot Password? </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              let data = {
                email: email,
                password: password,
              };
              dispatch(login(data));
            }}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
