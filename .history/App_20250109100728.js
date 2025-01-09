import React, {useMemo, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabNavigator from './src/navigation/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Tab = createBottomTabNavigator();
  const appContext = useMemo(() => {
    return {isDarkTheme,setIsDarkTheme}
  })
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return
  (<NavigationContainer theme = {}>
    <TabNavigator />
    </NavigationContainer>)
}
