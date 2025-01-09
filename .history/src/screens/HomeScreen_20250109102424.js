import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity,Switch} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={ styles.container }>
      <Switch/>
      <Text style={ styles.text }>Welcome to the Home Screen!</Text>
      <TouchableOpacity onPress = {() => navigation.navigate('ProfileScreen')}>
        <Text>navigate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
