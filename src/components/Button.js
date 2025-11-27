import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Fonts from '../assets/fonts/Fonts';

const Buttoon = ({
  onPress,
  backgroundColor = '#691BFB',
  textColor = '#fff',
  style,
  title = 'Continue',
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 66,
    borderRadius: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ad82fd',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    fontFamily: Fonts.PoppinsRegular,
  },
});

export default Buttoon;
