import {View, Text} from 'react-native';
import React from 'react';
import MainBackground from '../../../../components/MainBackground';
import CustomHeader from '../../../../components/CustomHeader';
import { DimensionConstants } from '../../../../constants/DimensionConstants';
const SecurityPinScreen = () => {
  return (
    <MainBackground>
      <CustomHeader title={'Biometric'} />
      <Text
        style={{
          fontSize: DimensionConstants.thirtyTwo,
          maxWidth: '80%',
          fontWeight: '500'
        }}>
        Add security Pin
      </Text>
    </MainBackground>
  );
};

export default SecurityPinScreen;
