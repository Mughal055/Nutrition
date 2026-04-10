import { View, Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { a } from '../../../style/style';
import ItHeader from '../../../components/ItHeader';
import Fonts from '../../../assets/fonts/Fonts';
import Buttoon from '../../../components/Button';
import CustomImage from '../../../components/CustomImage';
// import BottomTab from '../../../../src/navigation/BottomTab';

const WelcomeScreen = () => {
  const navigation = useNavigation(); // Move it INSIDE the component

  return (
    <View style={{ flex: 1 }}>
      <CustomImage />

      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image
          source={require('../../../assets/Img/background.png')}
          style={{ marginTop: 20 }}
        />
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={a.WelH}>Unlock the app for Calorie Tracking</Text>
        </View>
        <View style={{ flex: 1, marginTop: 35 }}>
          <Buttoon
            title="Signup"
            onPress={() => navigation.navigate('Signup')}
          />
        </View>
        <View style={{ flex: 1, marginTop: 60 }}>
          <Buttoon
            title="Login"
            backgroundColor="#fff"
            textColor="#000"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
        <View style={{ flex: 1, marginTop: 30 }}>
          <Text onPress={() => navigation.navigate('BottomTab')} style={a.tex}>
            Continue as Bottom Tab
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
