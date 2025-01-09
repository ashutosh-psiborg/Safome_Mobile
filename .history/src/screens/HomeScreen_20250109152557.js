import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTranslation } from 'react-i18next';
import LanguagePicker from '../components/LanguagePicker';

const HomeScreen = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <View>
      <LanguagePicker/>
      {/* <Text>{t('hello')}</Text>
      <Button title="Switch to german" onPress={() => changeLanguage('ger')} />
      <Button title="Switch to English" onPress={() => changeLanguage('en')} /> */}
    </View>
  );
};

export default HomeScreen;
