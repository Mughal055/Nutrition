import { View, Text } from 'react-native';
import CustomInput from '../../../components/Input';
import React, { useState } from 'react';
import { a } from '../../../style/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Buttoon from '../../../components/Button';
import ItHeader from '../../../components/ItHeader';
import { useNavigation } from '@react-navigation/native';
import Footer from '../../../components/Footer';
import auth from '@react-native-firebase/auth';
import Diary from '../../Main/Diary';

const Login = () => {
  const navigation = useNavigation();
  const [Email, setEmail] = useState('');
  const [Pass, setPass] = useState('');
  const [Msg, setMsg] = useState('');
  const [LoggedIn, setLoggedIn] = useState(null);
  //
  const user = auth().currentUser;
  //
  const HandleLogin = async () => {
    try {
      if (Email.length > 0 && Pass.length > 0) {
        const UserLogin = await auth().signInWithEmailAndPassword(Email, Pass);
        console.log(UserLogin);
        setMsg('');

        // for show on login screen
        setLoggedIn({
          Email: UserLogin.user.email,
          uid: UserLogin.user.uid,
        });
        // for show diary screeen
        setTimeout(() => {
          navigation.replace('BottomTab');
        }, 1500);
      } else {
        alert('Please Enter Your Data...');
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
          title="Login to your account"
          description="Oh, were meeting again, hurry upand                 log in to see the new posts!"
        />

        <View style={{ flex: 1 }}>
          <CustomInput
            placeholder="Email"
            icon="mail-outline"
            value={Email}
            onChangeText={value => setEmail(value)}
          />
          <CustomInput
            placeholder="Password"
            icon="lock-closed-outline"
            value={Pass}
            onChangeText={value => setPass(value)}
          />

          <View
            style={{
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              marginRight: 10,
            }}
          >
            <Text
              style={{ color: 'red' }}
              onPress={() => navigation.navigate('ForgotPassword')}
            >
              Forgot password?
            </Text>
          </View>
          <View style={{ flex: 1, marginTop: 60 }}>
            <Buttoon onPress={() => HandleLogin()} title="Log in" />
          </View>
          {/*  */}
          {LoggedIn && (
            <View style={{ margin: 50 }}>
              <Text>Email: {LoggedIn?.Email}</Text>
              <Text>Uid: {LoggedIn?.uid}</Text>
            </View>
          )}
        </View>
      </View>
      {/*  */}

      {/*  */}
      <Footer
        onPress={() => navigation.navigate('Signup')}
        linkText="Sign up"
      />
      {/*  */}
    </View>
  );
};
export default Login;
