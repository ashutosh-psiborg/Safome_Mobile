import {View, Text} from 'react-native';
import React from 'react';
import MainBackground from '../../../../components/MainBackground';
import CustomHeader from '../../../../components/CustomHeader';

const SecurityPinScreen = () => {
  return (
    <MainBackground>
          <CustomHeader title={ 'Biometric' } />
          <Text style = {{}}>Add security Pin</Text>
    </MainBackground>
  );
};

export default SecurityPinScreen;
