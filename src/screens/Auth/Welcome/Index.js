import { View, Text ,Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {a} from '../../../style/style';
import Header from '../../../components/header';
import Fonts from '../../../assets/fonts/Fonts'
import Buttoon from '../../../components/Button'
import Wel from '../../../assets/Img/Wel.png'
import { Button } from 'react-native';



const WelcomeScreen = () => {
  const navigation= useNavigation();
  return (
    <View style={{flex:1}}>
      <View style={{flex:1,position:'relative',width:250,height:300}}> 

        <Image source={Wel} width={'100%'} height={'100%'} />
      <Text style={[a.badge,{top:180, left:63 }]}>Protein</Text>
         <Text style={[a.badge,{top:240, left:130 }]}>Fats</Text>
            <Text style={[a.badge,{top:295, left:218 }]}>Carbs</Text>
      
      </View>
      

      <View style={{flex:1,alignItems:'center'}}> 
        <Image source={require('../../../assets/Img/background.png')} style={{
          marginTop:20,
        }} />

        <View style={{justifyContent:'center'}}>
          <Text style={a.WelH}>Unlock                                             the app for                                              Calorie Tracking</Text>
        </View>

       <View style={{flex:1,marginTop:35,}}>          
    <Buttoon title='Signup'
    onPress={() => navigation.navigate('Signup')} />
   </View>

        <View style={{flex:1,marginTop:60,}}>          
    <Buttoon title='Login' backgroundColor='#fff' textColor='#000' 
    onPress={() => navigation.navigate('Login')} />
   </View>

   <View style={{flex:1,marginTop:30,}}> 
        <Text onPress={() => navigation.navigate('Boarding1')}
           style={a.tex}>
          Continue as Boarding </Text>
   </View>

        </View>

        
    </View>
  );
}
export default WelcomeScreen;