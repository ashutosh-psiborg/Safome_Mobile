import React, {useMemo, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabNavigator from './src/navigation/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import DarkTheme from './src/theme/DarkTheme';
import LightTheme from './src/theme/LightTheme';
import { AppContext } from './src/theme/AppContext';
import StackNavigator from './src/navigation/StackNavigator';

export default function App() {
  const Tab = createBottomTabNavigator();
  const appContext = useMemo(() => {
    return {isDarkTheme,setIsDarkTheme}
  })
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return
  (<NavigationContainer theme={ isDarkTheme ? DarkTheme : LightTheme }>
    <AppContext.Provider value = {appContext}>
      <StackNavigator />
      </AppContext.Provider>
    </NavigationContainer>)
}
