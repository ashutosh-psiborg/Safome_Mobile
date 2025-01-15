import {View, Text} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import MainBackground from '../../../../components/MainBackground';
import CustomHeader from '../../../../components/CustomHeader';
import {DimensionConstants} from '../../../../constants/DimensionConstants';
import Spacing from '../../../../components/Spacing';
import { useTheme } from '../../../../theme/ThemeContext';

const SecurityPinScreen = () => {
  const {theme} = useTheme();
  const {t} = useTranslation();
  return (
    <MainBackground>
      <CustomHeader title={'Biometric'} />
      <Spacing height={DimensionConstants.thirtyEight} />
      <Text
        style={{
          fontSize: DimensionConstants.thirtyTwo,
          fontWeight: '600',
        }}>
        Add security
      </Text>
      <Text
        style={{
          fontSize: DimensionConstants.thirtyTwo,
          fontWeight: '600',
        }}>
        Pin
      </Text>
      <Spacing height={DimensionConstants.twentyFour} />
      <Text
        style={{
          color: theme.lightText,
          fontWeight: '500',
          fontSize: DimensionConstants.fourteen,
          lineHeight: DimensionConstants.twentyFour,
        }}>
        Enter 4 digit security pin
      </Text>
    </MainBackground>
  );
};

export default SecurityPinScreen;
