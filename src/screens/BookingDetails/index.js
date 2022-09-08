import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {useSelector} from 'react-redux';
import BackBtn from '../../assets/icons/backBtn.svg';
import Calander from '../../assets/icons/Calander.svg';
import Clock from '../../assets/icons/Clock.svg';
import CustomText from '../../components/CustomText';
import {useBookingDetailsQuery} from '../../services/api';
import {styles} from './style';

const Index = props => {
  let recivedUserId = props.route.params.userId;

  const tokenValue = useSelector(state => state.loginReducer.token);

  let data = {
    recivedUserId: recivedUserId,
    tokenValue: tokenValue,
  };

  const responseInfo = useBookingDetailsQuery({data});

  console.log('responseInfo', responseInfo);

  const [image, setImage] = useState(
    'https://i.pinimg.com/736x/44/79/eb/4479eb7886849b000b1c0f4952310388.jpg',
  );

  const pressed = () => {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
    }).then(image => {
      setImage(image.path);
      console.log('image', image);
    });
  };

  return (
    <View style={{flex: 1}}>
      {responseInfo.isLoading ? (
        <ActivityIndicator
          style={styles.indicator}
          size="large"
          color="#BADA55"
        />
      ) : responseInfo.data ? (
        <ScrollView style={{flex: 1}}>
          <View style={styles.TopView}>
            <View style={styles.TopView2}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Booking')}
                activeOpacity={1}>
                <View style={styles.Btn}>
                  <View style={styles.btnSvg}>
                    <BackBtn />
                  </View>
                </View>
              </TouchableOpacity>

              <CustomText style={styles.Text}>Booking Details </CustomText>
            </View>
          </View>

          <View style={styles.botomView}>
            <View style={styles.taskView}>
              <Image
                source={require('../../assets/images/male.png')}
                style={styles.male}
              />

              <View style={styles.wrap}>
                <CustomText style={styles.userName}>
                  {responseInfo.data.Data.bookings.customer.name
                    .substring(0, 1)
                    .toUpperCase() +
                    responseInfo.data.Data.bookings.customer.name.substring(1)}
                </CustomText>

                <View style={styles.servicesContainer}>
                  {responseInfo.data.Data.bookings.services
                    .split(',')
                    .map(item => {
                      return (
                        <View style={styles.servicesView}>
                          <CustomText style={styles.services}>
                            {item}
                          </CustomText>
                        </View>
                      );
                    })}
                </View>
              </View>
              <View style={styles.scheduleView}>
                <View>
                  <CustomText>Date</CustomText>
                  <View style={styles.row}>
                    <View style={styles.btnSvg}>
                      <Calander />
                    </View>
                    <CustomText style={styles.scheduleText}>
                      {responseInfo.data.Data.bookings.date}
                    </CustomText>
                  </View>
                </View>

                <View style={styles.left}>
                  <CustomText>Time</CustomText>
                  <View style={styles.row}>
                    <View style={styles.btnSvg}>
                      <Clock />
                    </View>
                    <CustomText style={styles.scheduleText2}>
                      {responseInfo.data.Data.bookings.time}
                    </CustomText>
                  </View>
                </View>
              </View>
            </View>

            <CustomText style={styles.left2}> Attached Image </CustomText>

            <View style={styles.maleView}>
              <Image source={{uri: image}} style={styles.schedulelogo}></Image>

              <Image source={{uri: image}} style={styles.schedulelogo}></Image>
            </View>

            <CustomText style={styles.notes}> Notes </CustomText>

            <CustomText style={styles.para}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut .Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut .Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut, Lorem ipsum
              dolor sit ame.{' '}
            </CustomText>

            <View style={styles.btnView}>
              <TouchableOpacity onPress={() => pressed()}>
                <View style={styles.btnStyle}>
                  <View style={styles.btnStyleDeep}>
                    <CustomText style={styles.color}>Attach Image</CustomText>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.btnStyle}>
                  <View style={styles.btnStyleDeep}>
                    <CustomText style={styles.color}>
                      Mark it Complete
                    </CustomText>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      ) : (
        <View style={styles.networkError}>
          <CustomText style={{alignSelf: 'center'}}>
            {' '}
            Network Error!!{' '}
          </CustomText>
        </View>
      )}
    </View>
  );
};

export default Index;
