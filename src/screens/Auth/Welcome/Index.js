import { Image, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Buttoon from '../../../components/Button';

import Wel from '../../../assets/Img/Wel.png';
import { a } from '../../../style/style';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={{ width: '100%', height: 450 }}>
        <Image source={Wel} style={{ width: '100%', height: '100%' }} />
        <Text style={[a.badge, { top: 180, left: 63 }]}>Protein</Text>
        <Text style={[a.badge, { top: 240, left: 130 }]}>Fats</Text>
        <Text style={[a.badge, { top: 295, left: 218 }]}>Carbs</Text>
      </View>

      <View style={{ flex: 1, alignItems: 'center', padding: 25 }}>
        <Image source={require('../../../assets/Img/background.png')} />

        <Text style={a.WelH}>Unlock the app for Calorie Tracking</Text>

        <Buttoon title="Signup" onPress={() => navigation.navigate('Signup')} />

        <Buttoon
          title="Login"
          backgroundColor="#fff"
          textColor="#000"
          onPress={() => navigation.navigate('Login')}
        />
        <Text onPress={() => navigation.navigate('Boarding1')} style={a.tex}>
          Continue as Boarding{' '}
        </Text>
      </View>
    </View>
  );
};
export default WelcomeScreen;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
