import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Input = ({
  icon,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      {icon && <Icon name={icon} size={22} color="#666" style={styles.icon} />}

      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={styles.input}
        placeholderTextColor="black"
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#F7F8F9',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d6d8dd',

    marginHorizontal: 15,
    marginVertical: 8,

    paddingHorizontal: 15,
  },

  icon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    paddingVertical: 10,

    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },
});
