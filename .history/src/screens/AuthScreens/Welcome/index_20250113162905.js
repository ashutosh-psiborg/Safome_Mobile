import { View, Text, Image } from 'react-native';
import React from 'react';
import MainBackground from '../../../components/MainBackground';
import { ImageConstants } from '../../../constants/ImageConstants';

const WelcomeScreen = () => {
  return (
    <MainBackground>
      <Text style={{ fontWeight: '600', fontSize: 16 }}>Welcome</Text>
      <Image
        source={ImageConstants.welcomeImage} 
        style={{ width: 200, height: 200 }}
      />
    </MainBackground>
  );
};

export default WelcomeScreen;
