import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RegisterScreen from './AuthScreens/Register/index';
import { useTranslation } from 'react-i18next';


const HomeScreen = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const navigation = useNavigation();
  return (
    <View style={ styles.container }>
      <View>
      <Text>{t('welcome')}</Text>
      <Button title={t('login')} onPress={() => alert('Login pressed')} />
      <Button title="Switch to Hindi" onPress={() => changeLanguage('hi')} />
      <Button title="Switch to English" onPress={() => changeLanguage('en')} />
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
