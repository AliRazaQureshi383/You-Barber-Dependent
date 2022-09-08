import React, {useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import eyelash from '../../assets/images/eyelash.png';
import CustomText from '../../components/CustomText';
import {styles} from './style';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';
import EyeCloseSvg from '../../assets/icons/Hide.svg';
import PasswordSvg from '../../assets/icons/Lock.svg';
import EmailSvg from '../../assets/icons/Mail.svg';
import EyeOpenSvg from '../../assets/icons/Show.svg';
import {useCreatePostMutation} from '../../services/api';
import {login, token} from '../../redux/reducer/reducer';

const schema = Yup.object({
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password should be 8 chars minimum.'),

  email: Yup.string()
    .email('invalid email format')
    .required('No email provided.'),
});

export default function index(props) {
  const dispatch = useDispatch();
  const data1 = useSelector(state => state.loginReducer.email);
  const data2 = useSelector(state => state.loginReducer.password);
  console.log('data1', data1);
  const [visibility, setVisibility] = useState(true);
  const [invalidMsg, setInvalidMsg] = useState('');
  const [email, setEmail] = useState(data1);
  const [password, setPassword] = useState(data2);
  const [createResponse, responseInfo] = useCreatePostMutation();

  const showPass = () => {
    return visibility
      ? setVisibility(false) & setEye(<EyeOpenSvg />)
      : setVisibility(true) & setEye(<EyeCloseSvg />);
  };
  const [eye, setEye] = useState(eyelash);

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <CustomText style={styles.welcomeText}>Welcome Back! </CustomText>
        <CustomText style={styles.welcomMsg}>
          Please enter your account here
        </CustomText>

        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={schema}
          onSubmit={(values, actions) => {
            actions.setSubmitting(true);
            setEmail(values.email);
            setPassword(values.password);
            let data = {
              email: values.email,
              password: values.password,
              role: '6',
            };
            console.log('data', data);

            createResponse(data)
              .then(res => {
                if (res.data.statusCode == '200') {
                  dispatch(login(data));
                  console.log('res.data.token', res.data.Data.access_token);
                  let value = {
                    token: res.data.Data.access_token,
                  };

                  dispatch(token(value));
                } else if (res.data.statusCode == '400') {
                  setInvalidMsg('Email or Password is Incorrect');
                }
              })
              .catch(err => {
                console.log('err', err), setInvalidMsg('Network Error.!!');
              });
          }}>
          {props => (
            <View>
              <View style={styles.inputView}>
                <View style={styles.inputIcon}>
                  <EmailSvg />
                </View>

                <TextInput
                  style={styles.TextInput}
                  placeholder="Email or phone number"
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}></TextInput>
              </View>
              <CustomText style={styles.error}>{props.errors.email}</CustomText>

              <View style={styles.inputView}>
                <View style={styles.inputIcon}>
                  <PasswordSvg />
                </View>

                <TextInput
                  style={styles.TextInput}
                  placeholder="  Password"
                  secureTextEntry={visibility}
                  onChangeText={props.handleChange('password')}
                  value={props.values.password}
                />
                <TouchableOpacity onPress={() => showPass()}>
                  {visibility ? (
                    <View style={styles.inputIconRight}>
                      <EyeCloseSvg />
                    </View>
                  ) : (
                    <View style={styles.inputIconRight}>
                      <EyeOpenSvg />
                    </View>
                  )}
                </TouchableOpacity>
              </View>
              <CustomText style={styles.error}>
                {props.errors.password}
              </CustomText>
              <CustomText style={[{alignSelf: 'center'}, styles.error]}>
                {invalidMsg}
              </CustomText>

              <View style={styles.forgetPass}>
                <TouchableOpacity onPress={() => console.log('ForgetPassword')}>
                  <CustomText> Forgot Password? </CustomText>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity
                  disabled={responseInfo.isLoading}
                  style={styles.loginBtn}
                  onPress={props.handleSubmit}>
                  {!responseInfo.isLoading ? (
                    <CustomText style={styles.loginText}>LOGIN</CustomText>
                  ) : (
                    <ActivityIndicator size="small" color="white" />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
}
