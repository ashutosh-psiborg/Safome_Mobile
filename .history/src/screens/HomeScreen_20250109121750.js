import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RegisterScreen from './AuthScreens/Register/index';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    // <View style={styles.container}>
    //   <Text style={ styles.text }>Welcome to the Home Screen!</Text>
    //   <TouchableOpacity onPress = {() => navigation.navigate('ProfileScreen')}>
    //     <Text>navigate</Text>
    //   </TouchableOpacity>
    // </View>
    <RegisterScreen/>
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
