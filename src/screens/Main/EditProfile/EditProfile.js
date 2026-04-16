import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import database from '@react-native-firebase/database';
import { createUserWithEmailAndPassword } from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import OpenProfile from './OpenProfile';

const EditProfile = () => {
  const [InputValue, setInputValue] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [Msg, setMsg] = useState('');

  const navigation = useNavigation();
  //
  const handleLogin = async () => {
    try {
      if (email.length > 0 && password.length > 0) {
        const IsUserCreated = await auth().signInWithEmailAndPassword(
          email,
          password,
        );
        console.log(IsUserCreated);
        setMsg('');

        navigation.replace('OpenProfile', {
          email: IsUserCreated.user.email,
          uid: IsUserCreated.user.uid,
        });
      } else {
        alert('Please Enter Data...');
      }
    } catch (error) {
      console.log(error);
      setMsg(error.Msg);
    }
  };
  return (
    <View>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            marginTop: 20,
          }}
        >
          Edit Profile
        </Text>
        <TextInput
          style={c.InputBox}
          placeholder="Enter Your Email"
          value={email}
          onChangeText={value => setemail(value)}
        />
        <TextInput
          style={c.InputBox}
          placeholder="Enter Your Password"
          value={password}
          onChangeText={value => setpassword(value)}
          secureTextEntry={true}
        />
        {/*  */}
        <TouchableOpacity style={c.Btn} onPress={() => handleLogin()}>
          <Text style={{ color: '#fff' }}>Login</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>{Msg}</Text>
      </View>
    </View>
  );
};
export default EditProfile;
const { width } = Dimensions.get('screen');

const c = StyleSheet.create({
  InputBox: {
    borderRadius: 15,
    borderWidth: 2,
    width: width - 30,
    paddingVertical: 10,
    margin: 10,
  },

  Btn: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 15,
    marginHorizontal: 10,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 15,
    width: width - 40,
    marginVertical: 10,
    elevation: 3,
  },
});
