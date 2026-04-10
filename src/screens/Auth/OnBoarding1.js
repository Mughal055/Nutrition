import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Image, Text, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

// Images
import img1 from '../../assets/Img/img1.png';
import img2 from '../../assets/Img/img2.png';
import img3 from '../../assets/Img/img3.png';

const OnBoarding1 = () => {
  const navigation = useNavigation();

  const screens = [
    {
      image: img1,
      title: 'Maintaining Good Health Should Be The Primary Focus Of Everyone.',
    },
    {
      image: img3,
      title: 'Calculate Calories Of Healthy Recipes From All Over The World.',
    },
    {
      image: img2,
      title: 'With Amazing Built Tools You Can Track Your Progress.',
    },
  ];

  return (
    <Onboarding
      onDone={() => navigation.replace('Boarding1')}
      onSkip={() => navigation.replace('Boarding1')}
      // 🔥 tumhara data use ho raha hai
      pages={screens.map(item => ({
        backgroundColor: '#000',
        image: (
          <Image
            source={item.image}
            style={{ width: 300, height: 300, resizeMode: 'contain' }}
          />
        ),

        title: item.title,
        subtitle: '',
      }))}
      // 🔥 optional: same feel jesa tum chah rahi thi
      titleStyles={{
        color: '#fff',
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
      }}
      // 🔥 dots styling (tumhary jesi)
      dotStyle={{
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#fff',
      }}
      activeDotStyle={{
        width: 25,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#fff',
      }}
      // 🔥 button text change
      DoneButtonComponent={({ ...props }) => (
        <TouchableOpacity {...props}>
          <Text style={{ color: '#fff', marginRight: 15 }}>Get Started</Text>
        </TouchableOpacity>
      )}
      NextButtonComponent={({ ...props }) => (
        <TouchableOpacity {...props}>
          <Text style={{ color: '#fff', marginRight: 15 }}>Continue</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default OnBoarding1;
