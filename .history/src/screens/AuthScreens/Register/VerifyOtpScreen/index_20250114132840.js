import { View, Text } from 'react-native'
import React from 'react'
import MainBackground from '../../../../components/MainBackground'
import CustomHeader from '../../../../components/CustomHeader'
import {useTranslation} from 'react-i18next';

const VerifyOtpScreen = () => {
    const {theme} = useTheme();
  const {t} = useTranslation();
  return (
      <MainBackground>
          <CustomHeader title={''}/>
    </MainBackground>
  )
}

export default VerifyOtpScreen