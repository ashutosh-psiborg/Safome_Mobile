import {View, Text, Image} from 'react-native';
import React from 'react';
import MainBackground from '../../../components/MainBackground';
import {ImageConstants} from '../../../constants/ImageConstants';
import Spacing from '../../../components/Spacing';
import { DimensionConstants } from '../../../constants/DimensionConstants';

const WelcomeScreen = () => {
  return (
    <MainBackground>
      <Spacing height={ DimensionConstants.sixteen} />
      <Text style={{fontWeight: '600', fontSize: 16}}>Welcome</Text>
      <Image source={ImageConstants.welcomeImage} />
    </MainBackground>
  );
};

export default WelcomeScreen;
