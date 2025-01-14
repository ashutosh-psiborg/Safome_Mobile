import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import BackIcon from '../../../assets/icons/BackIcon';
import MainBackground from '../../../components/MainBackground';

const RegisterScreen = () => {
  return (
    <MainBackground>
      <View style = {{flexDirection : 'row',alignItems : 'center',marginLeft : Dimension}}>
        <TouchableOpacity>
          <BackIcon />
        </TouchableOpacity>
        <Text style = {{fontSize : 16 , fontWeight : '600'}}>Create account</Text>
      </View>
    </MainBackground>
  );
};

export default RegisterScreen;
