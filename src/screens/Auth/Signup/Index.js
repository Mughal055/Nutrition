import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../../components/Input';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Buttoon from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';
import ItHeader from '../../../components/ItHeader';
import Footer from '../../../components/Footer';
import auth from '@react-native-firebase/auth';

const Signup = () => {
  const navigation = useNavigation();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Eye, setEye] = useState(true);

  const HandleSignup = async () => {
    try {
      if (Email.length > 0 && Password.length > 0) {
        const createUser = await auth().createUserWithEmailAndPassword(
          Email,
          Password,
        );
        console.log(createUser);
      } else {
        alert('Please Enter Data');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        {/* Back */}
        <Ionicons
          name="arrow-back-outline"
          onPress={() => navigation.goBack()}
          size={24}
          color="#000"
          style={{ marginTop: 25, marginLeft: 20 }}
        />

        {/* Header */}
        <ItHeader
          title="Create new account"
          description="Oh hello, I hope we'll see you soon. Complete your registration!"
        />

        {/* Inputs */}
        <View style={{ marginTop: 40 }}>
          <CustomInput placeholder="Full Name" icon="person-outline" />

          <CustomInput
            placeholder="Email"
            icon="mail-outline"
            value={Email}
            onChangeText={setEmail}
          />

          {/* Password + Eye */}
          <View>
            <CustomInput
              placeholder="Password"
              icon="lock-closed-outline"
              value={Password}
              onChangeText={setPassword}
              secureTextEntry={Eye}
            />
            <Ionicons
              name={Eye ? 'eye-outline' : 'eye-off-outline'}
              size={22}
              onPress={() => setEye(!Eye)}
              style={{ position: 'absolute', right: 20, top: 20 }}
            />
          </View>
        </View>

        {/* Terms */}
        <View
          style={{ flexDirection: 'row', marginTop: 20, paddingHorizontal: 10 }}
        >
          <Ionicons
            name="square-outline"
            color="#837d7dff"
            size={28}
            style={{ marginRight: 10 }}
          />
          <Text
            style={{
              color: '#837d7dff',
              flex: 1,
              fontFamily: 'Poppins-Regular',
            }}
          >
            I agree to the terms and conditions and Privacy Policy.
          </Text>
        </View>

        {/* Button */}
        <View style={{ marginTop: 5, paddingHorizontal: 10 }}>
          <Buttoon title="Sign up" onPress={HandleSignup} />
        </View>

        {/* Footer */}
        <View style={{ marginTop: 130 }}>
          <Footer
            onPress={() => navigation.navigate('Login')}
            linkText="Login"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Signup;
