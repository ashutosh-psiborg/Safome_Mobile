import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTranslation } from 'react-i18next';
import LanguagePicker from '../components/LanguagePicker';

const HomeScreen = () => {
  const { t, i18n } = useTranslation();


  return (
    <View>
      
      tton title="Switch to English" onPress={() => changeLanguage('en')} /> */}
    </View>
  );
};

export default HomeScreen;
