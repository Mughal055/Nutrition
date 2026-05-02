import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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
      style: { height: '100%', width: '100%' },
    },
    {
      image: img3,
      title: 'Calculate Calories Of Healthy Recipes From All Over The World.',
      style: { height: '100%', width: 399 },
    },
    {
      image: img2,
      title: 'With Amazing Built Tools You Can Track Your Progress.',
      style: {
        height: 325,
        width: 408,
        transform: [{ rotate: '180deg' }],
      },
    },
  ];

  return (
    <Onboarding
      onDone={() => navigation.replace('Boarding1')}
      onSkip={() => navigation.replace('Boarding1')}
      pages={screens.map(item => ({
        backgroundColor: '#000',

        // 🔥 Image + White Gradient Background
        image: (
          <View
            style={{
              width: 360,
              height: 360,
              position: 'relative',
              margin: 30,
            }}
          >
            {/* 🔥 White Gradient (BEHIND IMAGE) */}
            <LinearGradient
              colors={['transparent', '#a8a3a3', '#faf6f666', '#251e1e']}
              style={{
                position: 'absolute',
                bottom: 25,
                width: '100%',
                height: '100%',
              }}
            />

            {/* Image */}
            <Image
              source={item.image}
              style={{
                width: item.style.width,
                height: item.style.height,
                resizeMode: 'cover',

                // 🔥 optional shadow for premium look
                shadowColor: '#000',
                shadowOpacity: 0.2,
                shadowRadius: 50,
                elevation: 5,
                transform: item.style.transform,
              }}
            />
          </View>
        ),

        title: item.title,
        subtitle: '',
      }))}
      // 🔥 Title Style
      titleStyles={{
        color: '#fff',
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
        marginHorizontal: 20,
      }}
      // 🔥 Dots
      dotStyle={{
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#aaa',
      }}
      activeDotStyle={{
        width: 25,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#fff',
      }}
      // 🔥 Buttons
      DoneButtonComponent={props => (
        <TouchableOpacity {...props}>
          <Text style={{ color: '#fff', marginRight: 15, fontSize: 16 }}>
            Get Started
          </Text>
        </TouchableOpacity>
      )}
      NextButtonComponent={props => (
        <TouchableOpacity {...props}>
          <Text style={{ color: '#fff', marginRight: 15, fontSize: 16 }}>
            Continue
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default OnBoarding1;
