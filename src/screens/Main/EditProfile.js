import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TopHeader from '../../components/TopHeader';
import Buttoon from '../../components/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScreenWrapper from '../../components/ScreenWrapper';

const EditProfile = () => {
  const [Visible, setVisible] = useState(true);
  return (
    <ScreenWrapper>
      {/*  */}
      <TopHeader screen={'Edit Profile'} />
      {/*  */}

      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ position: 'relative' }}>
          <Image
            source={require('../../assets/Img/Acc.png')}
            style={{
              marginTop: 20,
              width: 100,
              height: 100,
              borderRadius: 60,
            }}
          />

          <FontAwesome
            name="pencil"
            size={15}
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              backgroundColor: '#004A70',
              borderRadius: 20,
              padding: 8,
              color: '#fff',
            }}
          />
        </View>
      </View>
      {/* Inputs */}
      <View style={{ marginTop: 20 }}>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Phone number" />
      </View>

      <View style={{ position: 'relative' }}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={Visible}
        />

        <TouchableOpacity
          onPress={() => setVisible(!Visible)}
          style={{
            position: 'absolute',
            right: 25,
            top: '50%',
            transform: [{ translateY: -13 }], // perfect vertical center
          }}
        >
          <Ionicons
            name={Visible ? 'eye-outline' : 'eye-off-outline'}
            size={26}
            color="#555"
          />
        </TouchableOpacity>
      </View>
      {/* button */}
      <View style={{ alignItems: 'center' }}>
        <Buttoon title="Update" />
      </View>
    </ScreenWrapper>
  );
};

export default EditProfile;
const styles = StyleSheet.create({
  input: {
    backgroundColor: '#F7F8F9',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d6d8dd',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#000',
    margin: 8,
  },
});
