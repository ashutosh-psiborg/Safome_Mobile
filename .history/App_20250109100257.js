import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabNavigator from './src/navigation/TabNavigator';

export default function App() {
  const Tab = createBottomTabNavigator();
  const appContext = useM
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return <TabNavigator />;
}
