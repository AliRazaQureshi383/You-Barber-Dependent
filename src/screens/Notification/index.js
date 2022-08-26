import React from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import {styles} from './style';
import image from '../../assets/images/male.png';
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
        <Text style={styles.Text}> Notifications </Text>
      </View>

      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.cardContainer}>
            <Image source={item.img} style={styles.userImg}></Image>
            <View>
              <View style={styles.textView}>
                <Text style={styles.userName}>
                  {item.name} <Text style={styles.userMsg}>{item.msg}</Text>
                </Text>
              </View>
              <View style={styles.scheduleView}>
                <Text style={styles.scheduleText}>{item.time}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default Index;
