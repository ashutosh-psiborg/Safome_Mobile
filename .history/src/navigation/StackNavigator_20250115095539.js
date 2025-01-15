import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/AuthScreens/Login/index';
import RegisterScreen from '../screens/AuthScreens/Register/index';
import OnboardingScreen from '../screens/AuthScreens/Onboarding/index';
import WelcomeScreen from '../screens/AuthScreens/Welcome/index';
import VerifyMailOtpScreen from '../screens/AuthScreens/Register/VerifyMailOtpScreen/index';
import VerifyPhoneOtpScreen from '../screens/AuthScreens/Register/VerifyPhoneOtpScreen/index';
import CreatePasswordScreen from '../screens/AuthScreens/Register/CreatePasswordScreen/index';
import BioMetricScreen from '../screens/AuthScreens/Register/BioMetricScreen/index';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="OnboardingScreen">
      <Stack.Screen
        options={{headerShown: false}}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="RegisterScreen"
        component={RegisterScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="VerifyMailOtpScreen"
        component={VerifyMailOtpScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="VerifyPhoneOtpScreen"
        component={VerifyPhoneOtpScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="CreatePasswordScreen"
        component={CreatePasswordScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="VerifyPhoneOtpScreen"
        component={BioMetricScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="OnboardingScreen"
        component={OnboardingScreen}
      />
      <Stack.Screen
        options={{headerShown: false}} // Disable header for this screen
        name="WelcomeScreen"
        component={WelcomeScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
