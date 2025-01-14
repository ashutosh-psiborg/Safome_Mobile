import {View, Text} from 'react-native';
import React from 'react';
import MainBackground from '../../../../components/MainBackground';
import CustomHeader from '../../../../components/CustomHeader';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../../../theme/ThemeContext';
import Spacing from '../../../../components/Spacing';
import {DimensionConstants} from '../../../../constants/DimensionConstants';

const VerifyOtpScreen = ({route}) => {
  const {theme} = useTheme();
  const {email} = route.params;

  const {t} = useTranslation();
  return (
    <MainBackground>
      <CustomHeader title={t('Verify Email')} />
      <Spacing height={DimensionConstants.thirtyEight} />
      <Text style={{fontSize: 32, fontWeight: '600', maxWidth: '80%'}}>
        Please verify your Email address
      </Text>
      <Spacing height={DimensionConstants.twentyFour} />
      <Text
        style={{
          color: theme.lightText,
          fontWeight: '500',
          fontSize: DimensionConstants.fourteen,
          lineHeight: DimensionConstants.twentyFour,
        }}>
        We have sent you a code to
      </Text>

      <Text
        style={{
          color: theme.lightText,
          fontWeight: '500',
          fontSize: DimensionConstants.fourteen,
          lineHeight: DimensionConstants.twentyFour,
        }}>
        <Text
          style={{
            color: theme.text,
            fontWeight: '600',
            fontSize: DimensionConstants.fourteen,
          }}>
          {email}
        </Text>{' '}
        Enter the code
          </Text>
          <Text>
              
          </Text>
    </MainBackground>
  );
};

export default VerifyOtpScreen;
