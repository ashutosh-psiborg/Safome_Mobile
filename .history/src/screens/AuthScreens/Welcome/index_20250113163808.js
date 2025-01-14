import {View, Text, Image} from 'react-native';
import React from 'react';
import MainBackground from '../../../components/MainBackground';
import {ImageConstants} from '../../../constants/ImageConstants';
import Spacing from '../../../components/Spacing';
import { DimensionConstants } from '../../../constants/DimensionConstants';

const WelcomeScreen = () => {
  const {t, i18n} = useTranslation();
  const {theme} = useTheme();
  return (
    <MainBackground>
      <View style = {{alignItems : 'center'}}>
      <Spacing height={ DimensionConstants.fourteen} />
      <Text style={{fontWeight: '600', fontSize: 16,textAlign:'center'}}>Welcome</Text>
        <Image source={ ImageConstants.welcomeImage } />
        <Text style = {{fontSize : 24 , fontWeight:'700',color :'red' }}>Be Ready Anytime</Text>
        <Text style = {{fontSize : 14 , fontWeight:'700'}}>Be Ready Anytime</Text>
        <Text>Be Ready Anytime</Text>
        <Text>Be Ready Anytime</Text>

        </View>
    </MainBackground>
  );
};

export default WelcomeScreen;
