import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {a} from '../style/style'



const Input = ({
  
  icon,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  style,
}) => {

  return (
    <View style={styles.container}>
      <Icon name={icon} size={25} color="#666" style={a.icon} />

      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={a.Iinput}
        placeholderTextColor="black"
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: '#ddd',
    // borderRadius: 10,
     //paddingHorizontal: 12,
    // marginVertical: 8,
    // backgroundColor: '#fff',
  },
  icon: {
    marginRight: 8,
  },
//   input: {
//     paddingLeft:50,
//  marginTop: 10,
//   marginLeft:10,
//   marginBottom:20,
//   // paddingHorizontal:10,
//   borderColor:'#837d7dff',
//   padding:10,
//   // width: width - 20,borderWidth: 1,
 
//     height: 45,
//     color: '#000',
//   },
});
