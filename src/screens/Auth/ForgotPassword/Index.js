import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import CustomInput from '../../../components/Input';
import Buttoon from '../../../components/Button';
import Header from '../../../components/Header';

import { a } from '../../../style/style';

const ForgotPassword = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <Header
        title="Forgot Password"
        desc="Have you been so busy that you forgot your password?"
      />
      <CustomInput placeholder="Confirm-Email" iconName="mail-outline" />
      <Buttoon />
      <View style={styles.footer}>
        <Text style={a.texx}>
          No account yet,
          <Text
            onPress={() => navigation.navigate('NewPassword')}
            style={{ color: '#691BFB' }}
          >
            {' '}
            New Password
          </Text>
        </Text>
      </View>
    </View>
  );
};
export default ForgotPassword;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 25,
  },

  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
