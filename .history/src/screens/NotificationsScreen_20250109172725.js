import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
imort
const NotificationsScreen = () => {
  const {t, i18n} = useTranslation();
  const { theme, toggleTheme, isDarkTheme } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        { t('hello') }{' '}{t('world')}
      </Text>
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

export default NotificationsScreen;
