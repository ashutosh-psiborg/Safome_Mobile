import {View, Text} from 'react-native';
import React from 'react';
import MainBackground from '../../../../components/MainBackground';
import CustomHeader from '../../../../components/CustomHeader';
import {useTranslation} from 'react-i18next';
import { useTheme } from '../../../../theme/ThemeContext';
impoe

const VerifyOtpScreen = () => {
  const {theme} = useTheme();
  const {t} = useTranslation();
  return (
    <MainBackground>
          <CustomHeader title={ t('Verify Email') } />
          <Spacing/>
      <Text style={{fontSize: 32, fontWeight: '600', maxWidth: '80%'}}>
        Please verify your Email address
      </Text>
    </MainBackground>
  );
};

export default VerifyOtpScreen;
