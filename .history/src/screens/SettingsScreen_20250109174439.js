import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import LanguagePicker from '../components/LanguagePicker';
import { useTheme } from '../theme/ThemeContext';
const SettingsScreen = () => {
  const { theme, toggleTheme, isDarkTheme } = useTheme();

  return (
    <View style={ styles.container }>
      <LanguagePicker/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});


export default SettingsScreen