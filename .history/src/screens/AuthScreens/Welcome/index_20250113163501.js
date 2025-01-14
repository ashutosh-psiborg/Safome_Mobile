import {View, Text, Image} from 'react-native';
import React from 'react';
import MainBackground from '../../../components/MainBackground';
import {ImageConstants} from '../../../constants/ImageConstants';
import Spacing from '../../../components/Spacing';
import { DimensionConstants } from '../../../constants/DimensionConstants';

const WelcomeScreen = () => {
  return (
    <MainBackground>
      <View style = {{alignItems : 'center'}}>
      <Spacing height={ DimensionConstants.fourteen} />
      <Text style={{fontWeight: '600', fontSize: 16,textAlign:'center'}}>Welcome</Text>
        <Image source={ ImageConstants.welcomeImage } />
        <Text>Be Ready Anytime</Text>
        v
        </View>
    </MainBackground>
  );
};

export default WelcomeScreen;
