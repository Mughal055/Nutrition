import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { a } from '../../../style/style';
import CustomInput from '../../../components/Input';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Buttoon from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';
import ItHeader from '../../../components/ItHeader';
import Footer from '../../../components/Footer';
import { createUserWithEmailAndPassword } from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';

const Signup = () => {
  const navigation = useNavigation();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Msg, setMsg] = useState('');
  const [Eye, setEye] = useState(true);
  //
  const HandleSignup = async () => {
    try {
      if (Email.length > 0 && Password.length > 0) {
        const createUser = await auth().createUserWithEmailAndPassword(
          Email,
          Password,
        );
        setMsg('');
        console.log(createUser);
      } else {
        alert('Please Enter Data');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Ionicons
          name="arrow-back-outline"
          onPress={() => navigation.goBack()}
          size={24}
          color="#000"
          style={{ marginTop: 22, marginLeft: 22 }}
        />

        <ItHeader
          title="Create new account"
          description="Oh hello, I hope well see you in a little while.Complete your registration soon!"
        />
      </View>

      <View>
        <CustomInput placeholder="Full Name" icon="person-outline" />
        <CustomInput
          placeholder="Email"
          icon="mail-outline"
          value={Email}
          onChangeText={value => setEmail(value)}
        />
        <View style={{ flexDirection: 'row' }}>
          <CustomInput
            placeholder="Password"
            icon="lock-closed-outline"
            value={Password}
            onChangeText={value => setPassword(value)}
            secureTextEntry={Eye}
          />
          <Ionicons
            name={Eye ? 'eye-outline' : 'eye-off-outline'}
            size={22}
            onPress={() => setEye(!Eye)}
            style={{ position: 'relative', right: 35, top: 18 }}
          />
        </View>

        <View style={{ flexDirection: 'row', marginRight: 50 }}>
          <Ionicons
            name="square-outline"
            color="#837d7dff"
            size={35}
            style={{ marginRight: 10, marginLeft: 10 }}
          />
          <Text style={{ color: '#837d7dff' }}>
            I agree to the terms and conditions and agree with Privacy Policy.
          </Text>
        </View>
        <View style={{ flex: 1, marginTop: 60 }}>
          <Buttoon title="Sign up" onPress={() => HandleSignup()} />
        </View>
      </View>
      <Footer onPress={() => navigation.navigate('Login')} linkText="Login" />
    </View>
  );
};
export default Signup;
