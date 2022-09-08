import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useSelector} from 'react-redux';
import Calander from '../../assets/icons/Calander.svg';
import Clock from '../../assets/icons/Clock.svg';
import CustomText from '../../components/CustomText';
import {useGetAllPostQuery} from '../../services/api';
import {styles} from './style';

const Index = props => {
  const data3 = useSelector(state => state.loginReducer.token);
  const response = useGetAllPostQuery({data3});
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    {label: 'Show All', value: 'Show All'},
    {label: 'Active', value: 'Active'},
    {label: 'Pending', value: 'Pending'},
    {label: 'Cancelled', value: 'Cancelled'},
    {label: 'completed', value: 'Completed'},
  ]);

  return (
    <View style={{flex: 1}}>
      {response.isLoading ? (
        <ActivityIndicator
          style={styles.indicator}
          size="large"
          color = "#BADA55"
        />
      ) : response.data.Data.bookings ? (
        response.data.statusCode == '200' ? (
          <ScrollView style={{flex: 1}}>
            <View style={styles.TopView}>
              <CustomText style={styles.Text}>Bookings </CustomText>
            </View>

            <View style={styles.filterView}>
              <CustomText style={styles.filterText}>Filter:</CustomText>
              <View>
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  style={styles.picker}
                  dropDownContainerStyle={styles.pickerContainerBoarder}
                  placeholderStyle={styles.placeholderofDropPicker}
                />
              </View>
            </View>

            <FlatList
              data={response.data.Data.bookings}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                let test = item.services.split(',');
                console.log('test', test);
                console.log('first', item.id);
                return (
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate('BookingDetails', {
                        userId: item.id,
                      })
                    }
                    activeOpacity={1}>
                    <View style={styles.cardContainer}>
                      <Image
                        source={require('../../assets/images/male.png')}
                        style={styles.userImg}></Image>
                      <View>
                        <CustomText style={styles.HomeService}>
                          {item.service_type.substring(0, 1).toUpperCase() +
                            item.service_type.substring(1)}
                        </CustomText>
                        <CustomText style={styles.userName}>
                          {item.customer.name.substring(0, 1).toUpperCase() +
                            item.customer.name.substring(1)}
                        </CustomText>

                        <View style={styles.servicesContainer}>
                          {test.map(Services => {
                            return (
                              <View style={styles.servicesView}>
                                <CustomText style={styles.services}>
                                  {Services}
                                </CustomText>
                              </View>
                            );
                          })}
                        </View>

                        <View style={styles.scheduleView}>
                          <View style={styles.center}>
                            <Calander />
                          </View>

                          <CustomText style={styles.scheduleText}>
                            {item.date}
                          </CustomText>

                          <View style={styles.center}>
                            <Clock />
                          </View>

                          <CustomText style={styles.scheduleText2}>
                            {item.time}
                          </CustomText>
                        </View>
                      </View>

                      <CustomText style={styles.price}>
                        {item.charges}
                      </CustomText>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </ScrollView>
        ) : (
          <View
            style={{
              flex: 1,
              height: '100%',
              width: '100%',
              justifyContent: 'center',
            }}>
            <CustomText style={{alignSelf: 'center'}}>
              {' '}
              Network Error!!{' '}
            </CustomText>
          </View>
        )
      ) : (
        <View
          style={{
            flex: 1,
            height: '100%',
            width: '100%',
            justifyContent: 'center',
          }}>
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
