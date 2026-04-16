import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const CustomImage = ({
  width = 250,
  height = 300,
  paddingBottom = 0,
  style,
}) => {
  return (
    <View style={s.container}>
      <Image
        source={require('../assets/Img/Wel.png')}
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
      />

      <Text style={[s.badge, { top: 180, left: 63 }]}>Protein</Text>
      <Text style={[s.badge, { top: 240, left: 130 }]}>Fats</Text>
      <Text style={[s.badge, { top: 295, left: 218 }]}>Carbs</Text>
    </View>
  );
};

export default CustomImage;

const s = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
  },
  image: {
    // position: 'absolute',
  },
  badge: {
    position: 'absolute',
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    elevation: 3, // Android shadow
  },
});
