import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MainBackground from '../../../../components/MainBackground';
import CustomHeader from '../../../../components/CustomHeader';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../../../theme/ThemeContext';
import Spacing from '../../../../components/Spacing';
import {DimensionConstants} from '../../../../constants/DimensionConstants';
import CustomButton from '../../../../components/CustomButton';
import GlobeIcon from '../../../../assets/icons/GlobeIcon';
import { VerifyMailOtpStyles } from '../VerifyMailOtpScreen/Styles/VerifyMailOtpStyles';

const VerifyPhoneOtpScreen = ({route, navigation}) => {
  const {theme} = useTheme();
  const {phoneNumber} = route.params;
  const [code, setCode] = useState('');
  const {t} = useTranslation();
  const styles = VerifyMailOtpStyles(theme);

  const handleChange = value => {
    setCode(value);
  };

  return (
    <MainBackground>
      <CustomHeader
        title={t('Verify phone number')}
        backPress={() => navigation.goBack()}
      />
      <Spacing height={DimensionConstants.thirtyEight} />
      <Text style={styles.title}>{t('Please verify your Phone number')}</Text>
      <Spacing height={DimensionConstants.twentyFour} />
      <View style={{maxWidth: '80%'}}>
        <Text style={styles.infoText}>{t('We have sent OTP to')} </Text>
        <Text style={styles.infoText}>
          <Text style={ styles.emailText }>{ phoneNumber }</Text>{ ' ' }
          <TouchableOpacity>
            <TextEdit
          </TouchableOpacity>
          {t('phone number')}
        </Text>
        <Text style={styles.infoText}>Enter OTP below.</Text>
      </View>
      <Spacing height={DimensionConstants.thirtyOne} />
      <View style={styles.inputContainer}>
        <GlobeIcon />
        <TextInput
          style={styles.input}
          placeholder={t('Enter code')}
          value={code}
          onChangeText={text => handleChange(text)}
          keyboardType="phone-pad"
          placeholderTextColor={theme.placeHolderText}
          maxLength={6}
        />
      </View>
      <CustomButton onPress={ () => navigation
      .navigate('VerifyPhoneOtpScreen',{phoneNumber : phoneNumber})} text={ t('Continue') } />
      <Spacing height={DimensionConstants.sixteen} />
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>{t('Don’t see an email?')}</Text>
        <TouchableOpacity>
          <Text style={styles.resendText}> {t('Resend')}</Text>
        </TouchableOpacity>
      </View>
    </MainBackground>
  );
};

export default VerifyPhoneOtpScreen;
