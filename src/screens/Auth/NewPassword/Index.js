import { View, Text } from 'react-native'
import CustomInput from '../../../components/Input';
import React from 'react'
import {a} from '../../../style/style';
import { TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Buttoon from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';

const NewPassword = () => {
  const navigation= useNavigation();
  return (
    <View style={{flex:1}}>
      <View style={{flex:1,}}>
            <View>
            <Ionicons name="arrow-back-outline" size={24} color='#000' style={{marginTop:22,marginLeft:22}} />
            </View>
          <View style={{flex:1,alignItems:'center',}}>
              <Text style={a.WelH}>New Password</Text>
                <Text style={a.para}>Remember to re-enter your password                                  and don't forget it again! </Text>
                </View>
                 <View style={{flex:1.5}}>
                  <CustomInput placeholder='Create new Password' iconName='lock-closed-outline' />
                 <CustomInput placeholder='Confirm your password' iconName='lock-closed-outline' />
                 <View style={{flex:1,marginVertical:10,}}>          
              <Buttoon title='Change password'/>
              </View>
      </View> 
                    </View>
                     <View style={{flex:1,marginBottom:30,alignItems:'center',flexDirection:'column-reverse'}}> 
                                          <Text style={a.texx}>
                                             No account yet,
                                            <Text onPress={() => navigation.navigate('Boarding1')} style={{color:'#691BFB'}}> Boarding</Text></Text>
                                     </View>
                    </View>
                  )
                }
                export default NewPassword;