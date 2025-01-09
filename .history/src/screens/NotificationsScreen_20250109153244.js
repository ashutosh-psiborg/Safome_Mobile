import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const NotificationsScreen = () => {
  const { t, i18n } = useTranslation();

    return (
        <View style={styles.container}>
        <Text style={ styles.text }>{t('hello') }</Text>
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
    

export default NotificationsScreen