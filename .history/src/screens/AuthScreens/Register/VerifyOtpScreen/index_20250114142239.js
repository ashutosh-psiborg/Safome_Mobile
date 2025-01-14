import {View, Text} from 'react-native';
import React from 'react';
import MainBackground from '../../../../components/MainBackground';
import CustomHeader from '../../../../components/CustomHeader';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../../../theme/ThemeContext';
import Spacing from '../../../../components/Spacing';
import {DimensionConstants} from '../../../../constants/DimensionConstants';

const VerifyOtpScreen = () => {
  const {theme} = useTheme();
  const {t} = useTranslation();
  return (
    <MainBackground>
      <CustomHeader title={t('Verify Email')} />
      <Spacing height={DimensionConstants.thirtyEight} />
      <Text style={{fontSize: 32, fontWeight: '600', maxWidth: '80%'}}>
        Please verify your Email address
          </Text>
          <Spacing
          <Text>We have sent you a code to youremail123@gmail.com Enter the code below.</Text>
    </MainBackground>
  );
};

export default VerifyOtpScreen;
