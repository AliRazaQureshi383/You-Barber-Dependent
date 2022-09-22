import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '../constants';

const CustomInput = ({
  style,
  placeholder,
  onChangeText,
  value,
  secureTextEntry,
  icon,
  icon2,
}) => {
  return (
    <View style={stylesX.container}>
     { 
     icon?
     <View style={stylesX.icon}>{icon ? <View>{icon}</View> : null}</View>: null}

      <View style={stylesX.TextInput}>
        <TextInput
          onChangeText={onChangeText}
          placeholder={placeholder}
          value={value}
          style={[style]}
          secureTextEntry={secureTextEntry}
        />
      </View>
{icon2? <View style={stylesX.icon2}>{icon2 ? <View>{icon2}</View> : null}</View> : null }
      
    </View>
  );
};

export default CustomInput;

const stylesX = StyleSheet.create({
  TextInput: {
    flex: 1,
   
  },

  container: {
    backgroundColor: colors.white,
    borderRadius: hp(5),
    width: wp(90),
    height: wp(15),
    alignItems: 'center',
    borderWidth: wp(0.5),
    borderColor: colors.borderWhite,
    flexDirection: 'row',
  },
  icon: {
    marginLeft: wp(5),
    height: wp(5),
    width: wp(5),
    justifyContent :'center'
  },
  icon2: {
    height: wp(5),
    width: wp(5),
    marginRight :wp(5),
    justifyContent :'center'
  },
});
