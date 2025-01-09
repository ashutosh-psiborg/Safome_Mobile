import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigator from './src/navigation/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Tab = createBottomTabNavigator();
const 
  return (
    <NavigationContainer>
    <TabNavigator/>
    </NavigationContainer>
  );
}
