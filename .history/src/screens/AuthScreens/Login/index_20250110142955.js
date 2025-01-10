import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import MainBackground from '../../../components/MainBackground';
import BackIcon from '../../../assets/icons/BackIcon';
import {useTranslation} from 'react-i18next';
import {DimensionConstants} from '../../../constants/DimensionConstants';
import MailIcon from '../../../assets/icons/MailIcon';
import PasswordIcon from '../../../assets/icons/PasswordIcon';
import CustomButton from '../../../components/CustomButton';
import GoogleIcon from '../../../assets/icons/GoogleIcon';
import AppleIcon from '../../../assets/icons/AppleIcon';
import Spacing from '../../../components/Spacing';
import { loginStyles } from './Styles/LoginStyles';
import { useTheme } from "../../../../theme/ThemeContext";

const LoginScreen = () => {
  const { t, i18n } = useTranslation();

const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = text => {
    setEmail(text);
  };

  const handlePasswordChange = text => {
    setPassword(text);
  };
  return (
    <MainBackground>
      <View style={loginStyles.welcomeView}>
        <BackIcon />
        <Text style={loginStyles.welcomeText}>{t('Welcome')}</Text>
      </View>
      <Spacing height={DimensionConstants.twentyFour} />
      <Text style={loginStyles.signInText}>{t('Sign in to your Account')}</Text>
      <Spacing height={DimensionConstants.twentyFour} />
      <Text style={loginStyles.enterMailText}>
        {t('Enter your email and password to get start.')}
      </Text>
      <Spacing height={DimensionConstants.twentyFour} />
      <View style={loginStyles.textInputView}>
        <MailIcon marginRight={DimensionConstants.eight} />
        <TextInput
          placeholder="Email Address"
          keyboardType="email-address"
          value={email}
          onChangeText={handleEmailChange}
          autoCapitalize="none"
          placeholderTextColor="#5E6368"
        />
      </View>
      <View style={loginStyles.textInputView}>
        <PasswordIcon marginRight={DimensionConstants.twelve} />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={handlePasswordChange}
          placeholderTextColor="#5E6368"
        />
      </View>
      <Spacing height={DimensionConstants.eight} />
      <Text style={loginStyles.resetPasswordText}>
        I don’t remember password? <Text style={loginStyles.resetWord}>Reset</Text>
      </Text>
      <Spacing height={DimensionConstants.twentyFour} />
      <CustomButton text={t('Login')} />
      <Spacing height={DimensionConstants.sixteen} />
      <TouchableOpacity>
        <Text
          style={{
            color: '#005BBB',
            fontSize: 14,
            fontWeight: '500',
            textAlign: 'center',
          }}>
          Login with phone number
        </Text>
      </TouchableOpacity>
      <Spacing height={DimensionConstants.fifty} />
      <Text style={loginStyles.continue}>or continue with</Text>
      <Spacing height={DimensionConstants.ten} />
      <CustomButton
        textColor={'black'}
        borderColor={'#F0F1F2'}
        color={'#FFFFFF'}
        text={t('Continue with Google')}
        icon={<GoogleIcon />}
      />
      <Spacing height={DimensionConstants.ten} />
      <CustomButton
        textColor={'black'}
        borderColor={'#F0F1F2'}
        color={'#FFFFFF'}
        text={t('Continue with Google')}
        icon={<AppleIcon />}
      />
      <Spacing height={DimensionConstants.twentyFour} />
      <Text style={loginStyles.terms}>
        By clicking login you agree to recognates{' '}
        <Text style={loginStyles.termBlue}>Terms of use </Text>
        and <Text style={loginStyles.termBlue}>Privacy policy</Text>
      </Text>
    </MainBackground>
  );
};

export default LoginScreen;

