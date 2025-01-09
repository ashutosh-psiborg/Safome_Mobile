import React, { useContext } from 'react';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../theme/AppContext';
import { Switch } from '../../node_modules/react-native/types/index';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [isDarkTheme , setIsDarkTheme] = useContext(AppContext)
  return (
    <View style={ styles.container }>
      <View>
        <Switch
      </View>
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
