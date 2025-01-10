import { View, Text } from 'react-native'
import React from 'react'
import MainBackground from '../../../components/MainBackground'
import BackIcon from '../../../assets/icons/BackIcon'
import { useTranslation } from 'react-i18next';
const LoginScreen = () => {
  const {t, i18n} = useTranslation();

  return (
    <MainBackground>
      
      <BackIcon/>
      <Text>{t('Welcome')}</Text>
    </MainBackground>
  )
}

export default LoginScreen