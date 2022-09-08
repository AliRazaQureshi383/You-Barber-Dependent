import React from 'react';
import {FlatList, Image, ScrollView, View} from 'react-native';
import {styles} from './style';
import image from '../../assets/images/male.png';
import CustomText from '../../components/CustomText'
const DATA = [
  {
    time: '2 hours ago',
    msg: 'Requested for a booking ',
    name: 'John Legend',
    img: image,
  },
  {
    time: '4 hours ago',
    msg: 'Marked your order completed',
    name: 'Ali Raza',
    img: image,
  },
  {
    time: '8 hours ago',
    msg: 'Has placed an order',
    name: 'Nasar Bhai',
    img: image,
  },
  {
    time: '9 hours ago',
    msg: 'Requested for a booking',
    name: 'Adeel Bhai',
    img: image,
  },
  {
    time: '9 hours ago',
    msg: 'Marked your order completed',
    name: 'Umer Bhai',
    img: image,
  },
  {
    time: '12 hours ago',
    msg: 'Has placed an order. ',
    name: 'Hamza Bhai',
    img: image,
  },
  {
    time: '12 hours ago',
    msg: 'Requested for a booking',
    name: 'Qasim Bhai',
    img: image,
  },
  {
    time: '13 hours ago',
    msg: 'looking for an Appoinment ',
    name: 'Akbar Ali',
    img: image,
  },
  {
    time: '14 hours ago',
    msg: 'Has placed an order.',
    name: 'Waleed Shiekh',
    img: image,
  },
  {
    time: '14 hours ago',
    msg: 'Marked your order completed',
    name: 'Abu Bakar',
    img: image,
  },
];

const Index = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.TopView}>
        <CustomText style={styles.Text}> Notifications </CustomText>
      </View>

      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.cardContainer}>
            <Image source={item.img} style={styles.userImg}></Image>
            <View>
              <View style={styles.textView}>
                <CustomText style={styles.userName}>
                  {item.name} <CustomText style={styles.userMsg}>{item.msg}</CustomText>
                </CustomText>
              </View>
              <View style={styles.scheduleView}>
                <CustomText style={styles.scheduleText}>{item.time}</CustomText>
              </View>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default Index;
