import React, {useState,useMemo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabNavigator from './src/navigation/TabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import DarkTheme from './src/theme/DarkTheme';
import LightTheme from './src/theme/LightTheme';
import {AppContext} from './src/theme/AppContext';

export default function App() {
  
  const Tab = createBottomTabNavigator();
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const appContext =return {isDarkTheme, setIsDarkTheme};
  });
  return (
    <NavigationContainer theme={isDarkTheme ? DarkTheme : LightTheme}>
      <AppContext.Provider value = {appContext}>
        <TabNavigator/>
      </AppContext.Provider>
    </NavigationContainer>
  );
}
