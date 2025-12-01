import { View, Text, StyleSheet } from 'react-native';
import { a } from '../style/style';
import React from 'react';

const CustomHeader = ({ title, desc }) => {
  return (
    <View style={{flex:1,alignItems:'center'}}>
     <Text style={a.WelH}>{title}</Text>
       <Text style={a.para}>{desc}</Text>
    </View>
  );
};
export default CustomHeader;