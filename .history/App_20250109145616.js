import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppNavigator from './src/navigation/AppNavigator';
import {I18nextProvider} from 'react-i18next';
import i18next from './i18n';
export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <I18nextProvider i18n={i18next}>
      <AppNavigator />
    </I18nextProvider>
  );
}
