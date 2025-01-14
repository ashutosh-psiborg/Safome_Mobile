import {View, Text} from 'react-native';
import React from 'react';
import MainBackground from '../../../../components/MainBackground';
import CustomHeader from '../../../../components/CustomHeader';
import {useTranslation} from 'react-i18next';
import { useTheme } from '../../../../theme/ThemeContext';

const VerifyOtpScreen = () => {
  const {theme} = useTheme();
  const {t} = useTranslation();
  return (
    <MainBackground>
          <CustomHeader title={ t('Verify Email') } />
          <Tewxt
    </MainBackground>
  );
};

export default VerifyOtpScreen;
