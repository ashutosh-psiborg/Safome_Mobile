import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTranslation } from 'react-i18next';

const HomeScreen = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <View>
      <Text>{t('hello')}</Text>
      <Button title={t('login')} onPress={() => alert('Login pressed')} />
      <Button title="Switch to Hindi" onPress={() => changeLanguage('hi')} />
      <Button title="Switch to English" onPress={() => changeLanguage('en')} />
    </View>
  );
};

export default HomeScreen;
