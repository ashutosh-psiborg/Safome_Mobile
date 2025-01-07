import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import HomeScreen from './src/screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from 'react-navigation/native'
import ProfileScreen from './src/screens/ProfileScreen';
export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenoptions>
        <Tab.Screen name = 'Home' component = {HomeScreen} />
        <Tab.Screen name='Profile' component= {ProfileScreen} />

</Tab.Navigator>
    </NavigationContainer>
  )
};


