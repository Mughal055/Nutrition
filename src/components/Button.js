import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('screen');

const Buttoon = ({
  onPress,
  backgroundColor = '#691BFB',
  textColor = '#fff',
  style,
  title = 'Continue',
  icon,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.btn, { backgroundColor }, style]}
        onPress={onPress}
        activeOpacity={0.8}
      >
        {icon && (
          <Ionicons
            name={icon}
            size={20}
            color={textColor}
            style={{ marginRight: 8 }}
          />
        )}

        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    margin: 10,
    padding: 10,

    backgroundColor: '#691BFB',
    width: width - 70,
    height: 48,
  },

  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
});

export default Buttoon;
