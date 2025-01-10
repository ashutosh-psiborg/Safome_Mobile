import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import TabNavigator from './TabNavigator';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */ }
      <StackNavigator
      <TabNavigator/>
    </NavigationContainer>
  );
};

export default AppNavigator;
