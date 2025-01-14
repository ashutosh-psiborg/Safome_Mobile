import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BackIcon from '../assets/icons/BackIcon';
import { DimensionConstants } from '../../../constants/DimensionConstants';

const CustomHeader = ({ title, navigation }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <BackIcon />
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: DimensionConstants.fifteen,
    marginTop: DimensionConstants.twenty,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: DimensionConstants.twentyFour,
  },
});

export default CustomHeader;
