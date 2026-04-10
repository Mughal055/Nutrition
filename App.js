import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Boarding1 from './src/screens/Auth/boarding1/Index';
import Boarding2 from './src/screens/Auth/boarding2/Index';
import Boarding3 from './src/screens/Auth/boarding3/Index';
import React, { useEffect, useState } from 'react';
import WelcomeScreen from './src/screens/Auth/Welcome/Index';
import Signup from './src/screens/Auth/Signup/Index';
import Login from './src/screens/Auth/Login/Index';
import NewPassword from './src/screens/Auth/NewPassword/Index';
import ForgotPassword from './src/screens/Auth/ForgotPassword/Index';
import Home from './src/screens/Main/Home/Home';
import Splash from './src/screens/Auth/Splash/Splash';
import OnBoarding1 from './src/screens/Auth/OnBoarding1';
//import Diary from './src/screens/Main/Diary';
// import Navigation from './src/navigation/Index';
// import EditProfile from './src/screens/Main/EditProfile/EditProfile';
// import OpenProfile from './src/screens/Main/EditProfile/OpenProfile';
import auth from '@react-native-firebase/auth';
import BottomTab from './src/navigation/BottomTab';
//
import Detail1 from './src/screens/Main/Details/Detail1';
import Detail2 from './src/screens/Main/Details/Detail2';
import Detail3 from './src/screens/Main/Details/Detail3';
//
import Account from './src/screens/Main/Account';
import PrivacyPolicy from './src/screens/Main/PrivacyPolicy';
import EditProfile from './src/screens/Main/EditProfile';
import HelpCenter from './src/screens/Main/HelpCenter';
import Diary from './src/screens/Main/Diary';

const Stack = createNativeStackNavigator();

const App = () => {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 5000);
  }, []);

  // const [IsUserLogin, setIsUserLogin] = useState(false)

  // useEffect(() => {
  //   const s = auth().onAuthStateChanged((user)=>{
  // if (user !== null) {
  //   setIsUserLogin(true)
  // }} )
  //   return s;
  // }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* {!IsUserLogin? :null} // agr user login nih tou edit/signup wali scrrn show krwa do */}
        {/* <Stack.Screen name="EditProfile" component={EditProfile} />

        <Stack.Screen name="OpenProfile" component={OpenProfile} /> */}
        {splash ? <Stack.Screen name="Splash" component={Splash} /> : null}
        <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
        <Stack.Screen name="Boarding1" component={Boarding1} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Boarding2" component={Boarding2} />
        <Stack.Screen name="Boarding3" component={Boarding3} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail1" component={Detail1} />
        <Stack.Screen name="Detail2" component={Detail2} />
        <Stack.Screen name="Detail3" component={Detail3} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="HelpCenter" component={HelpCenter} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        {/* <Stack.Screen name="Diary" component={Diary} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
