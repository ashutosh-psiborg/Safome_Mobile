import {View, Text} from 'react-native';
import React from 'react';
import MainBackground from '../../../../components/MainBackground';
import CustomHeader from '../../../../components/CustomHeader';
import {DimensionConstants} from '../../../../constants/DimensionConstants';
import Spacing from '../../../../components/Spacing';
const SecurityPinScreen = () => {
  return (
    <MainBackground>
      <CustomHeader title={'Biometric'} />
      <Spacing height={DimensionConstants.thirtyEight} />
      <Text
        style={{
          fontSize: DimensionConstants.thirtyTwo,
          fontWeight: '500',
        }}>
        Add security
      </Text>
      <Text
        style={{
          fontSize: DimensionConstants.thirtyTwo,
          fontWeight: '500',
        }}>
        Pin
      </Text>
      <Spacing height={DimensionConstants.twentyFour} />
    </MainBackground>
  );
};

export default SecurityPinScreen;
