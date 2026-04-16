import { View, Text } from 'react-native'
import { StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {a} from '../../../style/style';
import ItHeader from '../../../components/ItHeader'
import Fonts from '../../../assets/fonts/Fonts'
import Buttoon from '../../../components/Button'
import FoodTrack from '../../../components/FoodTrack';

const Boarding3 = () => {
   const navigation = useNavigation();
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',padding:'10%'}}>
       <FoodTrack titlle='Food Track' source={require('../../../assets/Img/Mobile.png')}/>
           <ItHeader title='Track Your Health' description='With amazing built tools you can track your progress.' />
             
                <View style={a.dot}>
                  <View style={a.dot2}></View>
                  <View style={a.dot3}></View>
                  <View style={a.dot1}></View>
                </View>
    <View style={{flex:1}}>          
    <Buttoon
    onPress={() => navigation.navigate('WelcomeScreen')} />
   </View> 
 </View>
   
   
    
 )}
 export default Boarding3;