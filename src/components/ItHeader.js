import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ItHeader = ({ title, description }) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.paragraph}>{description}</Text>
    </View>
  );
};

export default ItHeader;

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  title: {
     marginTop:20,
  paddingBottom:5,
  fontSize:30,
  textAlign:'center',
  fontFamily:'Poppins-Medium',
  color:'#000000D9',
  fontWeight:'500',
  justifyContent:'center',
  lineHeight:34,
  },
  paragraph: {
    fontFamily:'Poppins-Regular',
        textAlign:'center',
        justifyContent:'center', 
        fontSize:17,
        fontWeight:'400',
        color:'#00000073',
        marginVertical:10,
        paddingVertical:10,
        lineHeight:20,
        // marginBottom:25,
        // flex:1,
  },
});
