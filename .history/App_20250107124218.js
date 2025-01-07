import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
   <HomeScreen
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default App;
