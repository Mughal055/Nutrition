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
import Home from '../../Main/Home/Home';

const NewPassword = () => {
  const navigation= useNavigation();
  return (
    <View style={{flex:1}}>
      <View style={{flex:1,}}>
            
            <Ionicons name="arrow-back-outline" onPress={()=>navigation.goBack()} size={24} color='#000' style={{marginTop:22,marginLeft:22}} />
          <ItHeader title='New password' description='Remember to re-enter your password and don,t forget it again!'/>
                 <View style={{flex:1.5}}>
                  <CustomInput placeholder='Create new Password' icon='lock-closed-outline' />
                 <CustomInput placeholder='Confirm your password' icon='lock-closed-outline' />
                 <View style={{flex:1,marginVertical:20,}}>          
              <Buttoon title='Change password'/>
              </View>
      </View> 
                    </View>
                     <Footer onPress={()=>navigation.navigate('Home')} linkText='Home' />
                    </View>
                  )
                }
                export default NewPassword;