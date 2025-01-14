import {View, Text, Image} from 'react-native';
import React from 'react';
import MainBackground from '../../../components/MainBackground';
import {ImageConstants} from '../../../constants/ImageConstants';
import Spacing from '../../../components/Spacing';
import { DimensionConstants } from '../../../constants/DimensionConstants';
import {useTranslation} from 'react-i18next';
import { useTheme } from '../../../theme/ThemeContext';
const WelcomeScreen = () => {
  const {t, i18n} = useTranslation();
  const {theme} = useTheme();
  return (
    <MainBackground>
      <View style = {{alignItems : 'center'}}>
      <Spacing height={ DimensionConstants.fourteen} />
      <Text style={{fontWeight: '600', fontSize: 16,textAlign:'center'}}>Welcome</Text>
        <Image source={ ImageConstants.welcomeImage } />
        <Text style = {{fontSize : 24 , fontWeight:'700',color :theme.secondary }}>Be Ready Anytime</Text>
        <Text style = {{fontSize : 14 , fontWeight:'500',color : theme.grey}}>Familiarize yourself with the SOS button</Text>
        <Text>Be Ready Anytime</Text>
        <Text>Be Ready Anytime</Text>

        </View>
    </MainBackground>
  );
};

export default WelcomeScreen;
