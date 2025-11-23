import React from 'react';
import { Image, StyleSheet } from 'react-native';

const CustomImage = ({ source, width = 300, height = 300,paddingBottom = 0, style }) => {
  return (
    <Image
      source={source}
      style={[s.image, { width, height ,paddingBottom}, style]}
      resizeMode="contain"
    />
  );
};

const s = StyleSheet.create({
  image: {
    alignSelf: 'center',
    position:'absolute',
  },
});

export default CustomImage;
