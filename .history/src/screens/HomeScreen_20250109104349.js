import React, { useState } from 'react';
import { View, Text, StyleSheet ,TouchableOpacity,Switch} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';


const HomeScreen = () => {
  const { color } = useTheme();
  const [isDarkTheme,setIsDarkTheme] = useState(false)
  console.log("++++",color)
  const navigation = useNavigation();
  return (
    <View >
      <Switch value={ isDarkTheme } onChange={ () => {setIsDarkTheme(prev =>!prev) } } />
      <Text>Welcome to the Home Screen!</Text>
      <TouchableOpacity onPress = {() => navigation.navigate('ProfileScreen')}>
        <Text>navigate</Text>
      </TouchableOpacity>
    </View>
  );
};



export default HomeScreen;
