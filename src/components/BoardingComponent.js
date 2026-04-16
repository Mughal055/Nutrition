import React from 'react';
// import LinearGradient from 'react-native-linear-gradient';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Buttoon from './Button';
import Boarding1 from '../screens/Auth/boarding1/Index';
import { useNavigation } from '@react-navigation/native';

const BoardingComponent = ({ image, title, onPress, activeIndex }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Image */}

      <Image source={image} style={styles.image} />
      {/* <LinearGradient
        colors={['#000000', 'transparent']}
        style={styles.gradientTop}
      /> */}

      {/* Text */}
      <Text style={styles.title}>{title}</Text>

      {/* Dots */}
      <View style={styles.dots}>
        {[0, 1, 2].map((item, i) => (
          <View
            key={i}
            style={[styles.dot, activeIndex === i && styles.dotActive]}
          />
        ))}
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BoardingComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
  },
  image: {
    width: 565,
    height: 369,
    resizeMode: 'cover',
    backgroundColor: '#686868',
    marginTop: 100,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  dots: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 20,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#fff',
  },

  dotActive: {
    width: 25,
    backgroundColor: '#fff',
  },
  button: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 21,
    paddingLeft: 58,
    paddingRight: 58,
    paddingBottom: 21,
    // marginVertical: 10,
    width: 325,
    height: 66,
    backgroundColor: '#691BFB',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
});
