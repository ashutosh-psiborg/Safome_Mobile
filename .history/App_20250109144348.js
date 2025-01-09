import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppNavigator from './src/navigation/AppNavigator';
import { I18nextProvider } from 'react-i18next';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <AppNavigator/>
  );
}
