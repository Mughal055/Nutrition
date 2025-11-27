import { View, Text } from 'react-native';
import React from 'react';
import { a } from '../../../style/style';
import { TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Buttoon from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../../components/Input';

const Signup = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View>
          <Ionicons
            name="arrow-back-outline"
            size={24}
            color="#000"
            style={{ marginTop: 22, marginLeft: 22 }}
          />
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={a.WelH}>Create new account</Text>
          <Text style={a.para}>
            Oh hello, I hope we'll see you in a little Complete your
            registration soon!
          </Text>
        </View>
      </View>

      <View style={{ flex: 2 }}>
        <CustomInput placeholder="Full Name" />
        <TextInput
          placeholder="Email"
          style={a.Input}
          placeholderTextColor="#000"
        />
        <TextInput
          placeholder="Password"
          style={a.Input}
          placeholderTextColor="#000"
        />
        <TextInput
          placeholder="Re-enter password"
          style={a.Input}
          placeholderTextColor="#000"
        />

        <View style={{ flexDirection: 'row' }}>
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
        <View style={{ flex: 1.5, marginTop: 40 }}>
          <Buttoon title="Sign up" />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          marginBottom: 30,
          alignItems: 'center',
          flexDirection: 'column-reverse',
        }}
      >
        <Text style={a.texx}>
          Already have account?
          <Text
            onPress={() => navigation.navigate('Login')}
            style={{ color: '#691BFB' }}
          >
            {' '}
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};
export default Signup;
