import { View, Text } from 'react-native'
import React from 'react'

const VerifyPhoneOtpScreen = ({navigation , route}) => {
  const { phoneNumber } = route.params
  console.log(p)
  return (
    <View>
      <Text>VerifyPhoneOtpScreen</Text>
    </View>
  )
}

export default VerifyPhoneOtpScreen