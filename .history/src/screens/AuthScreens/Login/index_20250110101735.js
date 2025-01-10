import { View, Text } from 'react-native'
import React from 'react'
import MainBackground from '../../../components/MainBackground'
import BackIcon from '../../../assets/icons/BackIcon'
import { use}
const LoginScreen = () => {
  const {t, i18n} = useTranslation();

  return (
    <MainBackground>
      <BackIcon/>
      <Text>Login</Text>
    </MainBackground>
  )
}

export default LoginScreen