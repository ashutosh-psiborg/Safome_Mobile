import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const CustomButton = ({ text, color, textColor, onPress, icon: Icon ,border}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color || '#005BBB' }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.content}>
        {Icon && <View style={styles.icon}>{Icon}</View>}
        <Text style={[styles.text, { color: textColor || '#ffffff' }]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 8, // Space between icon and text
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default CustomButton;
