import { StyleSheet, TextInput, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const CustomInput = ({
  placeholder,
  iconName,
  value,
  onChangeText,
  secureTextEntry,
}) => {
  return (
    <View style={styles.mainContainer}>
      {iconName ? <Ionicons name={iconName} size={20} color="#691BFB" /> : null}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#292D32"
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: 70,
    borderRadius: 16,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: '#F9F9F9',
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    lineHeight: 16 * 1.4,
    paddingHorizontal: 10,
  },
});
