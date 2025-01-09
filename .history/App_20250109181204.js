import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppNavigator from './src/navigation/AppNavigator';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n';
import {ThemeProvider} from './src/theme/ThemeContext';
export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <L
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </I18nextProvider>
  );
}
