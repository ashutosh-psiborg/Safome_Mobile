import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import TabNavigator from './src/navigation/TabNavigator';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
   
    <TabNavigator/>
  );
}
