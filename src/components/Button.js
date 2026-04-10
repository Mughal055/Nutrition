import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Buttoon = ({
  onPress,
  backgroundColor = '#691BFB',
  textColor = '#fff',
  style,
  title = 'Continue',
  icon,
}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor }, style]}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <View style={{ flexDirection: 'row' }}>
          <Ionicons
            name={icon}
            size={23}
            style={{ color: '#fff', marginRight: 15 }}
          />
          <Text style={[styles.text, { color: textColor }]}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    // paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    paddingTop: 21,
    paddingLeft: 58,
    paddingRight: 58,
    paddingBottom: 21,
    // marginVertical: 10,
    width: 325,
    height: 66,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
});

export default Buttoon;
