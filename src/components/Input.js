import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {a} from '../style/style'
const CustomInput = ({
  placeholder,
  iconName,
  value,
  onChangeText,
  secureTextEntry,
}) => {
  return (
    <View style={a.main}>
      
      
        <Ionicons
          name={iconName}
          size={25}
          color="#777"
          style={a.icon}
        />
      {/* <View style={{position:'relative'}}>
                        <Ionicons name="mail-outline" size={25} style={{position:'absolute',top:18,left:20,}}/>
                        <TextInput placeholder='Email' style={a.Iinput} placeholderTextColor='#000' />
                        </View> */}

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor='#000'
        secureTextEntry={secureTextEntry}
        style={a.Iinput}
      />
    </View>
  );
};

export default CustomInput;


