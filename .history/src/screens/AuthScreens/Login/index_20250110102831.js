import {View, Text} from 'react-native';
import React from 'react';
import MainBackground from '../../../components/MainBackground';
import BackIcon from '../../../assets/icons/BackIcon';
import {useTranslation} from 'react-i18next';
import {DimensionConstants} from '../../../constants/DimensionConstants';
const LoginScreen = () => {
  const {t, i18n} = useTranslation();

  return (
    <MainBackground>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <BackIcon />
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            marginLeft: DimensionConstants.twentyFour,
          }}>
          {t('Welcome')}
        </Text>
      </View>
      <View style = {{marginT}}>
        <Text style={{fontSize: 32, fontWeight: '600'}}>
          {t('Sign in to your Account')}
        </Text>
      </View>
    </MainBackground>
  );
};

export default LoginScreen;
