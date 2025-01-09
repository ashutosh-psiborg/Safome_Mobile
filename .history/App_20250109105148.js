import React, {useState,useMemo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabNavigator from './src/navigation/TabNavigator';
import {NavigationContainer,DefaultTheme} from '@react-navigation/native';
import DarkTheme from './src/theme/DarkTheme';
import LightTheme from './src/theme/LightTheme';
import {AppContext} from './src/theme/AppContext';

export default function App() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white', // Ensure the `background` property is defined
    },
  };
  
  const Tab = createBottomTabNavigator();
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const appContext = useMemo(() => {
    return {isDarkTheme, setIsDarkTheme};
  });
  return (
    <NavigationContainer theme={isDarkTheme ? DarkTheme : LightTheme}>
      <AppContext.Provider value = {appContext}>
        <TabNavigator/>
      </AppContext.Provider>
    </NavigationContainer>
  );
}
