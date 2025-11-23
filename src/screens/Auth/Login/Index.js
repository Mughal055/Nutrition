import { View, Text } from 'react-native'
import CustomInput from '../../../components/Input';
import React from 'react'
import {a} from '../../../style/style';
import { TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Buttoon from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation= useNavigation();
  return (
    <View style={{flex:1}}>
      <View style={{flex:1.5,}}>
            <View>
            <Ionicons name="arrow-back-outline" size={24} color='#000' style={{marginTop:22,marginLeft:22}} />
            </View>
          <View style={{flex:1,alignItems:'center',}}>
              <Text style={a.WelH}>Login to your account</Text>
                <Text style={a.para}>Oh, we're meeting again, hurry upand                log in to see the new posts!</Text>
                </View>
                
    
    <View style={{flex:2}}>
                  <CustomInput placeholder='Email' iconName='mail-outline' />
                  <CustomInput placeholder='Password' iconName="lock-closed-outline" />

                       <View style={{flexDirection:'row-reverse',flex:1,marginRight:10,}}>
                  <Text style={{color:'red',}} onPress={()=>navigation.navigate('ForgotPassword')} >Forgot password?</Text>
                </View>
                 <View style={{flex:1.5,marginVertical:10,}}>          
              <Buttoon title='Log in'/>
              </View>
      </View> 
     </View>    
         
             
           
   
       <View style={{flex:1,marginBottom:30,alignItems:'center',flexDirection:'column-reverse'}}> 
              <Text style={a.texx}>
                No account yet,
                <Text onPress={() => navigation.navigate('Signup')} style={{color:'#691BFB'}}> Sign up</Text></Text>
         </View>
    </View>
  )
}
export default Login;