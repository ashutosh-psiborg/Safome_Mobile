import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { DimensionConstants } from '../constants/DimensionConstants';

const CustomButton = ({ text, color, textColor, onPress, icon: Icon, borderColor }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: color || '#005BBB' },
        borderColor && { borderWidth: 1, borderColor },
      ]}
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
    paddingVertical: 16, // Increase vertical padding
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: DimensionConstants,
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
    fontSize: 16, // Increase font size
    fontWeight: '500',
    textAlign: 'center',
  },
});


export default CustomButton;
