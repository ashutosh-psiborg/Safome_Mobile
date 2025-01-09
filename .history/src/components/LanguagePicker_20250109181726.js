import React from 'react';
import { View, Text, Button } from 'react-native';
import { useLanguage } from './LanguageContext';

const LanguagePicker = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <View>
      <Text>Current Language: {language}</Text>
      <Button title="Switch to English" onPress={() => changeLanguage('en')} />
      <Button title="Switch to Hindi" onPress={() => changeLanguage('hi')} />
    </View>
  );
};

export default LanguagePicker;
