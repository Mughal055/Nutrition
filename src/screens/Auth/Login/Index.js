import { View, Text } from 'react-native'
import CustomInput from '../../../components/Input';
import React from 'react'
import { a } from '../../../style/style';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Buttoon from '../../../components/Button';
// import CustomHeader from '../../../components/Header'
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation= useNavigation();
  return (
    <View style={{flex:1}}>
      <View style={{flex:1}}>
            <Ionicons name="arrow-back-outline" size={24} color='#000' style={{marginTop:22,marginLeft:22}} />
            {/* <CustomHeader title='Login to your account' desc='Oh, were meeting again, hurry upand log in to see the new posts!'/> */}
                
    
    <View style={{flex:1}}>
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