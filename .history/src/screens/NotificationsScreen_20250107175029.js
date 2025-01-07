import { View, Text } from 'react-native'
import React from 'react'

const NotificationsScreen = () => {
    eturn (
        <View style={styles.container}>
          <Text style={styles.text}>Welcome to the Home Screen!</Text>
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