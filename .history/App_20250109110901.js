import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <AppNavigator/>
  );
}
