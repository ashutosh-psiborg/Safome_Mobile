import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigator from './src/navigation/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Tab = createBottomTabNavigator();
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const appContext = useMemo(() => {
    return {isDarkTheme,setIsDarkTheme}
  })
  return (
    <NavigationContainer theme = {isDarkTheme}>
    <TabNavigator/>
    </NavigationContainer>
  );
}
