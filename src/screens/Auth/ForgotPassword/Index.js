import { View, Text } from 'react-native'
import CustomInput from '../../../components/Input';
import React from 'react'
import {a} from '../../../style/style';
import { TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Buttoon from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
  const navigation= useNavigation();
  return (
    <View style={{flex:1}}>
      <View style={{flex:1,}}>
            <View>
            <Ionicons name="arrow-back-outline" size={24} color='#000' style={{marginTop:22,marginLeft:22}} />
            </View>
          <View style={{flex:1,alignItems:'center',}}>
              <Text style={a.WelH}>Forgot Password</Text>
                <Text style={a.para}>Have you been so busy that you                                forgot your password? </Text>
                </View>
                <View style={{flex:1}}>
                  <CustomInput placeholder='Confirm-Email' iconName='mail-outline' />
                 
                 <View style={{flex:1,marginVertical:10,}}>          
              <Buttoon />
              </View>
      </View> 
        </View>
         <View style={{flex:1,marginBottom:30,alignItems:'center',flexDirection:'column-reverse'}}> 
                      <Text style={a.texx}>
                         No account yet,
                        <Text onPress={() => navigation.navigate('NewPassword')} style={{color:'#691BFB'}}> New Password</Text></Text>
                 </View>
     </View>
    )
 }
export default ForgotPassword;