import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import HomeScreen from './src/screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from 'react-navigation'
export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>

    </NavigationContainer>
  )
};


