import { View, Text } from 'react-native'
import React from 'react'
import MainBackground from '../../../components/MainBackground'

const WelcomeScreen = () => {
  return (
      <MainBackground>
          <Text style = {{fontWeight : '600',fontSize :16}}>Welcome</Text>
          <Image src={ re} />
      </MainBackground>
  )
}

export default WelcomeScreen