import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import HomeScreen from './src/screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
export const App = () => {
  const Tab = createBottomTabNavigator();

  return <HomeScreen />;
};


