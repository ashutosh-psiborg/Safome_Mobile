import React from 'react';
import { View, Text, Button } rom 'react-native'f;
import { useTranslation } from 'react-i18next';
import LanguagePicker from '../components/LanguagePicker';

const HomeScreen = () => {
  const { t, i18n } = useTranslation();

  return (
    <View>
      <Text>Homescreen</Text>
    </View>
  );
};

export default HomeScreen;
