import {View, Text, Image} from 'react-native';
import React from 'react';
import MainBackground from '../../../components/MainBackground';
import {ImageConstants} from '../../../constants/ImageConstants';
import Spacing from '../../../components/Spacing';
import { DimensionConstants } from '../../../constants/DimensionConstants';
import {useTranslation} from 'react-i18next';
import { useTheme } from '../../../theme/ThemeContext';
import CustomButton from '../../../components/CustomButton';
import { Dimensions } from '../../../../node_modules/react-native/types/index';
const WelcomeScreen = () => {
  const {t, i18n} = useTranslation();
  const {theme} = useTheme();
  return (
    <MainBackground>
      <View style = {{alignItems : 'center',}}>
      <Spacing height={ DimensionConstants.fourteen} />
      <Text style={{fontWeight: '600', fontSize: 16,textAlign:'center'}}>Welcome</Text>
        <Image source={ ImageConstants.welcomeImage } />
        <Text style = {{fontSize : 24 , fontWeight:'700',color :theme.secondary }}>Be Ready Anytime</Text>
        <Text style = {{fontSize : 14 , fontWeight:'500',color : theme.grey,lineHeight :DimensionConstants}}>Familiarize yourself with the SOS button</Text>
        <Text style = {{fontSize : 14 , fontWeight:'500',color : theme.grey}}>Practice in a safe space to ensure you're</Text>
        <Text style = {{fontSize : 14 , fontWeight:'500',color : theme.grey}}>ready anytime.</Text>
      </View>
      <CustomButton text={ t('Sign in') } />
        <CustomButton borderColor= {theme.borderColor} color={'#fff'} textColor={'#000'} text= {'Create account'}/>
    </MainBackground>
  );
};

export default WelcomeScreen;
