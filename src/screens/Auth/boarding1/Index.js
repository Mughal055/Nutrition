import { View, Text } from 'react-native'
import { StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {a} from '../../../style/style';
import Header from '../../../components/header';
import Fonts from '../../../assets/fonts/Fonts'
import Buttoon from '../../../components/Button'
import CustomImage from '../../../components/CustomImage';

const Boarding1 = () => {
   const navigation = useNavigation();
  return (
    <View style={{flex:1}}>
      <View></View>
        <View style={{flex:1.5,justifyContent:'center',alignItems:'center'}}>
        <Text style={a.food}>Food Track</Text>
        </View>
          <View style={{flex:1.5,justifyContent:'center',alignItems:'center'}}>
          <CustomImage source={require('../../../assets/Img/Eating.png')}  />
          </View>
            <View style={{flex:1.5,width:'70%',marginLeft:50,justifyContent:'center',alignItems:'center'}}>
            <Text style={a.title }>Eat Healthy</Text>
            <Text style={a.para}>Maintaining good health should be the primary focus of everyone.</Text>
            </View>
             
                <View style={a.dot}>
                  <View style={a.dot1}></View>
                  <View style={a.dot2}></View>
                  <View style={a.dot3}></View>
                </View>
    <View style={{flex:1,marginVertical:15,}}>          
    <Buttoon
    onPress={() => navigation.navigate('Boarding2')} />
   </View> 
   </View>
   
    
 )}
 export default Boarding1;