import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from '../../node_modules/react-native/types/index';

const ProfileScreen = ( ) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={ styles.text }>This is the ProfileScreen</Text>
      <TouchableOpacity
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
