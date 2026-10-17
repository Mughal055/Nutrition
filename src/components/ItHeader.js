import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ItHeader = ({ title, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.paragraph}>{description}</Text>
    </View>
  );
};

export default ItHeader;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
  },

  title: {
    marginTop: width * 0.05,
    paddingBottom: width * 0.018,

    fontSize: width * 0.07,
    lineHeight: width * 0.085,

    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    color: '#000000D9',
    fontWeight: '500',
  },

  paragraph: {
    fontFamily: 'Poppins-Regular',

    textAlign: 'center',

    fontSize: width * 0.047,
    lineHeight: width * 0.055,

    fontWeight: '400',
    color: '#00000073',

    marginVertical: width * 0.025,
    paddingVertical: width * 0.02,
  },
});
