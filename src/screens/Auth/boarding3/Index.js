import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import Buttoon from '../../../components/Button';
import CustomImage from '../../../components/CustomImage';
import { a } from '../../../style/style';

const Boarding3 = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View></View>
      <View
        style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text style={a.food}>Food Track</Text>
      </View>
      <View
        style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }}
      >
        <CustomImage source={require('../../../assets/Img/Mobile.png')} />
      </View>
      <View
        style={{
          flex: 1.5,
          width: '70%',
          marginLeft: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={a.title}>Track Your Health</Text>
        <Text style={a.para}>
          With amazing built tools you can track your progress.
        </Text>
      </View>

      <View style={a.dot}>
        <View style={a.dot3}></View>
        <View style={a.dot2}></View>
        <View style={a.dot1}></View>
      </View>
      <View style={{ flex: 1, marginVertical: 15 }}>
        <Buttoon onPress={() => navigation.navigate('WelcomeScreen')} />
      </View>
    </View>
  );
};
export default Boarding3;
