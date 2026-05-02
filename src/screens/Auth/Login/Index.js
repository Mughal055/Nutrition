import { View, Text, ScrollView } from 'react-native';
import CustomInput from '../../../components/Input';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Buttoon from '../../../components/Button';
import ItHeader from '../../../components/ItHeader';
import { useNavigation } from '@react-navigation/native';
import Footer from '../../../components/Footer';
import auth from '@react-native-firebase/auth';

const Login = () => {
  const navigation = useNavigation();
  const [Email, setEmail] = useState('');
  const [Pass, setPass] = useState('');
  const [LoggedIn, setLoggedIn] = useState(null);

  const HandleLogin = async () => {
    try {
      if (Email.length > 0 && Pass.length > 0) {
        const UserLogin = await auth().signInWithEmailAndPassword(Email, Pass);

        setLoggedIn({
          Email: UserLogin.user.email,
          uid: UserLogin.user.uid,
        });

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
    <View style={{ backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <Ionicons
          name="arrow-back-outline"
          onPress={() => navigation.goBack()}
          size={24}
          color="#000"
          style={{ marginTop: 22, marginLeft: 22 }}
        />

        <ItHeader
          title="Login to your account"
          description="Oh, we're meeting again, hurry up and login to see the new posts!"
        />

        <View style={{ marginTop: 30 }}>
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
        </View>

        <View
          style={{
            alignItems: 'flex-end',
            marginRight: 15,
            marginTop: 10,
          }}
        >
          <Text
            style={{ color: 'red' }}
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            Forgot password?
          </Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <Buttoon onPress={HandleLogin} title="Log in" />
        </View>

        {LoggedIn && (
          <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
            <Text>Email: {LoggedIn?.Email}</Text>
            <Text>Uid: {LoggedIn?.uid}</Text>
          </View>
        )}

        <View style={{ marginTop: 220 }}>
          <Footer
            onPress={() => navigation.navigate('Signup')}
            linkText="Sign up"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
