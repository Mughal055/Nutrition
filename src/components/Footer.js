import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {a} from '../style/style'
const Footer = ({onPress,linkText}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={a.texx}>
        No account yet,
        <Text
          style={styles.link}
          onPress={onPress}
        >
          {linkText}
        </Text>
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
    alignItems: 'center',
    flexDirection: 'column-reverse',
  },
  text: {
    fontSize: 14,
    color: '#000',
  },
  link: {
    color: '#691BFB',
    fontWeight: 'bold',
  },
});
