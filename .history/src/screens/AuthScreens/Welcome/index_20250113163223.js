import {View, Text, Image} from 'react-native';
import React from 'react';
import MainBackground from '../../../components/MainBackground';
import {ImageConstants} from '../../../constants/ImageConstants';
import Spacing from '../../../components/Spacing';

const WelcomeScreen = () => {
  return (
    <MainBackground>
      <Spacing/>
      <Text style={{fontWeight: '600', fontSize: 16}}>Welcome</Text>
      <Image source={ImageConstants.welcomeImage} />
    </MainBackground>
  );
};

export default WelcomeScreen;
