import { View, Text, Image, StyleSheet, Button } from 'react-native';
import React from 'react';
import Profile from '../../components/Profile';
import Buttoon from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import EditProfile from './EditProfile';

const Account = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          margin: 20,
        }}
      >
        <Image
          source={require('../../assets/Img/Acc.png')}
          resizeMode="center"
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            marginBottom: 10,
          }}
        />
        <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular' }}>
          Marvin McKinney
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Poppins-Regular',
            color: '#8391A1',
          }}
        >
          kenzi.lawson@example.com
        </Text>
      </View>
      {/*  */}
      <View style={{ marginHorizontal: 15, paddingVertical: 5 }}>
        <Text style={styles.outline}>Personal Info</Text>
        <Profile
          icon={'person-outline'}
          title={'Edit Profile'}
          onpress={() => navigation.navigate('EditProfile')}
        />
        <Profile icon={'shield-outline'} title={'Change password'} />
      </View>
      {/*  */}
      <View style={{ marginHorizontal: 15, paddingVertical: 5 }}>
        <Text style={styles.outline}>About</Text>
        <Profile icon={'flag-outline'} title={'Set Goal'} />
        <Profile icon={'help-circle-outline'} title={'Help Center'} />
        <Profile icon={'lock-closed-outline'} title={'Privacy & Policy'} />
        <Profile icon={'construct-outline'} title={'Terms & Condition'} />
      </View>
      {/*  */}
      <View style={{ marginHorizontal: 15, paddingVertical: 5 }}>
        <Text style={styles.btn}>Logout</Text>
        <Text
          style={[
            styles.btn,
            {
              backgroundColor: '#fff',
              color: '#691BFB',
              borderColor: '#691BFB',
              borderWidth: 1,
            },
          ]}
        >
          Delete Account
        </Text>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  outline: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  btn: {
    borderRadius: 10,
    textAlign: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#691BFB',
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
});
