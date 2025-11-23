import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { View } from 'react-native';

const Buttoon = ({ onPress, backgroundColor = '#691BFB', textColor = '#fff', style , title= 'Continue',}) => {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
    <TouchableOpacity
      style={[styles.button, { backgroundColor }, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    
    // paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
     margin:20,
    paddingTop:21,
    paddingLeft:58,
    paddingRight:58,
    paddingBottom:21,
    // marginVertical: 10,
     width:325,
     height:66,

  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});


    

export default Buttoon;