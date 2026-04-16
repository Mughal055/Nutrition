import { View, Text } from 'react-native'
import CustomInput from '../../../components/Input';
import React from 'react'
import {a} from '../../../style/style';
import { TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Buttoon from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';
import ItHeader from '../../../components/ItHeader';
import Footer from '../../../components/Footer';

const ForgotPassword = () => {
  const navigation= useNavigation();
  return (
    <View style={{flex:1}}>
      <View style={{flex:1,}}>
            
            <Ionicons name="arrow-back-outline" onPress={()=>navigation.goBack()} size={24} color='#000' style={{marginTop:22,marginLeft:22}} />
            
          <ItHeader title='Forgot password' description='Have you been so busy that you 
forgot your password? '/>
                <View style={{flex:1}}>
                  <CustomInput placeholder='Confirm-Email' icon='mail-outline' />
                 
                 <View style={{flex:1,marginVertical:10,}}>          
              <Buttoon />
              </View>
      </View> 
        </View>
         <Footer onPress={()=>navigation.navigate('NewPassword')} linkText='New Password' />
     </View>
    )
 }
export default ForgotPassword;