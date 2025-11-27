import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import CustomInput from '../../../components/Input';
import Buttoon from '../../../components/Button';
import Header from '../../../components/Header';

import { a } from '../../../style/style';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <Header
        title="Login to your account"
        desc="Oh, we're meeting again, hurry upand log in to see the new posts!"
      />

      <CustomInput placeholder="Email" iconName="mail-outline" />
      <CustomInput placeholder="Password" iconName="lock-closed-outline" />
      <Text
        style={styles.forgotText}
        onPress={() => navigation.navigate('ForgotPassword')}
      >
        Forgot password?
      </Text>
      <Buttoon title="Log in" />
      <View style={styles.footer}>
        <Text style={a.texx}>
          No account yet,
          <Text
            onPress={() => navigation.navigate('Signup')}
            style={{ color: '#691BFB' }}
          >
            {' '}
            Sign up
          </Text>
        </Text>
      </View>
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 25,
  },
  forgotText: {
    color: 'red',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
