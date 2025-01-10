import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CapsuleButton = ({ text, color, textColor, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color || '#6200ee' }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, { color: textColor || '#ffffff' }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 50, // Makes the button a capsule
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, // Adds shadow effect on Android
    shadowColor: '#000', // Adds shadow on iOS
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default CapsuleButton;
