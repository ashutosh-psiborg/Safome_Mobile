import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import HomeScreen from './src/screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from 'react-navigation/native'
export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name = 'Home' component = {HomeScreen} />
        <Tab.Screen name='Profile' component={ Pro} />

</Tab.Navigator>
    </NavigationContainer>
  )
};


