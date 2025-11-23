import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Boarding1 from './src/screens/Auth/boarding1/Index'
import Boarding2 from './src/screens/Auth/boarding2/Index'
import Boarding3 from './src/screens/Auth/boarding3/Index'
import React from 'react';
import WelcomeScreen from './src/screens/Auth/Welcome/Index';
import Signup from './src/screens/Auth/Signup/Index'
import Login from './src/screens/Auth/Login/Index'
import NewPassword from './src/screens/Auth/NewPassword/Index'
import ForgotPassword from './src/screens/Auth/ForgotPassword/Index'
// import Navigation from './src/navigation/Index';
const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen name="Boarding1" component={Boarding1} />
       <Stack.Screen name="Boarding2" component={Boarding2} />
       <Stack.Screen name="Boarding3" component={Boarding3} />
       <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
       <Stack.Screen name="Signup" component={Signup} />
       <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
       </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
