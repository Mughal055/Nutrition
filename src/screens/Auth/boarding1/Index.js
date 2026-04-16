import { View, Text } from 'react-native'
import { StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import React,{useEffect,useState} from 'react'
import {a} from '../../../style/style';
import ItHeader from '../../../components/ItHeader'
import Fonts from '../../../assets/fonts/Fonts'
import Buttoon from '../../../components/Button'
import FoodTrack from '../../../components/FoodTrack';
// import firestore from '@react-native-firebase/firestore';

const Boarding1 = () => {
  // const [gainData, setgainData] = useState(null)
  // // 
  // useEffect(() => {
  //   getData();
  // }, [])
  // // 
  // const getData = async ()=>{
  //   try {
  //     const dataa = await firestore().collection('testing').doc('test').get();
  //      console.log(dataa)
  //      setgainData(dataa.data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  //  console.log('err')
   const navigation = useNavigation();
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',padding:'10%'}}>
      {/* <View style={{flex:1}}>
        <Text>{gainData?gainData.name:'Loading..'}</Text>
      </View> */}
       <FoodTrack titlle='Food Track' source={require('../../../assets/Img/Eating.png')}/>
           <ItHeader title='Eat Healthy' description='Maintaining good health should be the primary focus of everyone.' />
             
                <View style={a.dot}>
                  <View style={a.dot1}></View>
                  <View style={a.dot2}></View>
                  <View style={a.dot3}></View>
                </View>
    <View style={{flex:1}}>          
    <Buttoon
    onPress={() => navigation.navigate('Boarding2')} />
   </View> 

   {/*  */}
    {/*  */}


 </View>
   
    
 )}
 export default Boarding1;