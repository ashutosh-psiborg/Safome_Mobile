import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DimensionConstants from '../constants/DimensionConstants'

const HomeScreen = () => {
console.log("---",Dimension.)
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
    backgroundColor: 'cyan',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
