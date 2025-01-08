import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { API_URL, API_KEY } from '@env';

console.log('API_URL:', API_URL);
console.log('API_KEY:', API_KEY);


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor : 'cyan',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
