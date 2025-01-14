import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import BackIcon from '../../../assets/icons/BackIcon';
import MainBackground from '../../../components/MainBackground';

const RegisterScreen = () => {
  return (
    <MainBackground>
      <View style = {{flexDirection : 'row',alignItem}}>
        <TouchableOpacity>
          <BackIcon />
        </TouchableOpacity>
        <Text>Create account</Text>
      </View>
    </MainBackground>
  );
};

export default RegisterScreen;
