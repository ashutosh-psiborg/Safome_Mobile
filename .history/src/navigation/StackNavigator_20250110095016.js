import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/AuthScreens/Login/index';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="L" component={LoginScreen} />
      <Stack.Screen name="DetailsScreen" component={Sign} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
