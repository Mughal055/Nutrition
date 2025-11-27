import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { a } from '../style/style';

const Header = ({ title, desc }) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backIcon}
      >
        <Ionicons name="arrow-back-outline" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={a.WelH}>{title}</Text>
      <Text style={a.para}>{desc}</Text>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  backIcon: {
    width: 44,
    height: 44,
    borderRadius: 100,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
});
