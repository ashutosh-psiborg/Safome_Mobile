import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // Assign icons based on the route name
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            } else if (route.name === 'Notification') {
              iconName = 'notifications';
            } else if (route.name === 'Settings') {
              iconName = 'settings';
            }

            // Return the icon component
            return (
              <Icon
                name={iconName}
                size={size || 24}
                color={focused ? '#007BFF' : '#8E8E8E'} // Blue for active, gray for inactive
              />
            );
          },
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarStyle: {
            height: 60, // Adjust height for better alignment
            paddingBottom: 8,
          },
          tabBarIconStyle: {
            alignItems: 'center', // Align icon in the center
            justifyContent: 'center',
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Notification" component={NotificationsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
