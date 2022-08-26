import React, {useState} from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import {styles} from './style';

const DATA = [
  {
    price: '$100.00',
    title: 'First Item',
    name: 'John Legend',
    date: '16 july,2021',
    time: '6:30 PM',

    task: [
      {
        service: 'shave',
      },
      {
        service: 'hairs',
      },
      {
        service: 'massage',
      },
    ],
  },
  {
    price: '$12.00',
    title: 'Second Item',
    name: 'Ali Raza',
    date: '16 july,2021',
    time: '6:30 PM',
    task: [
      {
        service: 'shave',
      },
      {
        service: 'hair cut',
      },

      {
        service: 'head massage',
      },
    ],
  },
  {
    price: '$18.00',
    title: 'Third Item',
    name: 'Nasar Bhai',
    date: '16 july,2021',
    time: '6:30 PM',
    task: [
      {
        service: 'shave',
      },
      {
        service: 'hair cut',
      },
    ],
  },
  {
    price: '$25.00',
    title: 'Fourth Item',
    name: 'Adeel Bhai',
    date: '16 july,2021',
    time: '6:30 PM',
    task: [
      {
        service: 'shave',
      },
      {
        service: 'hair cut',
      },
    ],
  },
  {
    price: '$21.00',
    title: 'Fifth Item',
    name: 'Umer Bhai',
    date: '16 july,2021',
    time: '6:30 PM',
    task: [
      {
        service: 'shave',
      },
      {
        service: 'hair cut',
      },
    ],
  },
  {
    price: '$29.00',
    title: 'Sixth Item',
    name: 'Hamza Bhai',
    date: '16 july,2021',
    time: '6:30 PM',
    task: [
      {
        service: 'shave',
      },
      {
        service: 'hair cut',
      },
    ],
  },
  {
    price: '$0.00',
    title: 'Seventh Item',
    name: 'Qasim Bhai Team Lead Stackup Solutions',
    date: '16 july,2021',
    time: '6:30 PM',
    task: [
      {
        service: 'shave',
      },
      {
        service: 'hair cut',
      },
      {
        service: 'Faical',
      },
      {
        service: 'Massage',
      },
    ],
  },
  {
    price: '$25.00',
    title: 'Eight Item',
    name: 'Muhammad Salman',
    date: '16 july,2021',
    time: '6:30 PM',
    task: [
      {
        service: 'shave',
      },
      {
        service: 'hair cut',
      },
      {
        service: 'hair color',
      },
    ],
  },
  {
    price: '$35.00',
    title: 'Nine Item',
    name: 'ALi Raza',
    date: '16 july,2021',
    time: '6:30 PM',
    task: [
      {
        service: 'shave',
      },
      {
        service: 'hair cut',
      },
    ],
  },
  {
    price: '$25.00',
    title: 'Tenth Item',
    name: 'Nasar Bhai Stackup solutions',
    date: '16 july,2021',
    time: '6:30 PM',
    task: [
      {
        service: 'shave',
      },
      {
        service: 'hair cut',
      },
    ],
  },
];

import DropDownPicker from 'react-native-dropdown-picker';

const Index = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    {label: 'Active', value: 'Active'},
    {label: 'Pending', value: 'Pending'},
    {label: 'Cancelled', value: 'Cancelled'},
    {label: 'completed', value: 'completed'},
    
  ]);
  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.TopView}>
        <Text style={styles.Text}>Bookings </Text>
      </View>

      <View style={styles.filterView}>
        <Text style={styles.filterText}>Filter:</Text>
        <View>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            multiple={true}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={styles.picker}
            dropDownContainerStyle={styles.pickerContainerBoarder}
            placeholder="Show All"
            placeholderStyle={styles.placeholderofDropPicker}
            labelStyle={styles.pickerLable}
            mode="BADGE"
            badgeDotColors={'#BADA55'}
          />
        </View>
      </View>

      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.cardContainer}>
            <Image
              source={require('../../assets/images/male.png')}
              style={styles.userImg}></Image>
            <View>
              <Text style={styles.HomeService}>Home Service</Text>
              <Text style={styles.userName}>{item.name} </Text>

              <View style={styles.servicesContainer}>
                {item.task.map(Services => {
                  return (
                    <View style={styles.servicesView}>
                      <Text style={styles.services}>{Services.service}</Text>
                    </View>
                  );
                })}
              </View>

              <View style={styles.scheduleView}>
                <Image
                  source={require('../../assets/images/calander.png')}
                  style={styles.schedulelogo}></Image>
                <Text style={styles.scheduleText}>{item.date}</Text>
                <Image
                  source={require('../../assets/images/clock.png')}
                  style={styles.schedulelogo}></Image>
                <Text style={styles.scheduleText2}>{item.time}</Text>
              </View>
            </View>

            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default Index;
