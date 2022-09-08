
import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

export default CustomText = (props)=> {
  return (
    <Text style={[styles.defaultStyle, props.style]}
    allowFontScaling = {false}
    >
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
 

});