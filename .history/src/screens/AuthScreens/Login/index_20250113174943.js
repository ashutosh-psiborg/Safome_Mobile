import {View, Text, TextInput, TouchableOpacity} from 'react-native';
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
import {loginStyles} from './Styles/LoginStyles';
import {useTheme} from '../../../theme/ThemeContext';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const LoginScreen = () => {
  const {t, i18n} = useTranslation();
  const {theme} = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Styles = loginStyles(theme);
  GoogleSignin.configure({
    webClientId:
      '941818245261-e8bdhhubjhpmdcq5duahq57el0e84hmm.apps.googleusercontent.com',
    scope
    // offlineAccess: true, // Enables server-side authentication
    // forceCodeForRefreshToken: true, // Get a refresh token (optional)
    // scopes: ['email', 'profile'],
  });
  const signIn = async () => {
    try {
      console.log('Checking Play Services...');
      await GoogleSignin.hasPlayServices();
      console.log('Play Services are available.');

      const response = await GoogleSignin.signIn();
      console.log('Sign-in successful:', response);
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      if (error.code) {
        switch (error.code) {
          case statusCodes.SIGN_IN_CANCELLED:
            console.error('User cancelled the login flow.');
            break;
          case statusCodes.IN_PROGRESS:
            console.error('Sign-in is already in progress.');
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            console.error('Play Services not available or outdated.');
            break;
          default:
            console.error('Other error:', error);
        }
      }
    }
  };

  
  const handleEmailChange = text => {
    setEmail(text);
  };

  const handlePasswordChange = text => {
    setPassword(text);
  };
  return (
    <MainBackground>
      <View style={Styles.welcomeView}>
        <BackIcon />
        <Text style={Styles.welcomeText}>{t('Welcome')}</Text>
      </View>
      <Spacing height={DimensionConstants.twentyFour} />
      <Text style={Styles.signInText}>{t('Sign in to your Account')}</Text>
      <Spacing height={DimensionConstants.twentyFour} />
      <Text style={Styles.enterMailText}>
        {t('Enter your email and password to get start.')}
      </Text>
      <Spacing height={DimensionConstants.twentyFour} />
      <View style={Styles.textInputView}>
        <MailIcon marginRight={DimensionConstants.eight} />
        <TextInput
          placeholder="Email Address"
          keyboardType="email-address"
          value={email}
          onChangeText={handleEmailChange}
          autoCapitalize="none"
          placeholderTextColor={theme.placeHolderText}
        />
      </View>
      <View style={Styles.textInputView}>
        <PasswordIcon marginRight={DimensionConstants.twelve} />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={handlePasswordChange}
          placeholderTextColor={theme.placeHolderText}
        />
      </View>
      <Spacing height={DimensionConstants.eight} />
      <Text style={Styles.resetPasswordText}>
        I don’t remember password? <Text style={Styles.resetWord}>Reset</Text>
      </Text>
      <Spacing height={DimensionConstants.twentyFour} />
      <CustomButton text={t('Login')} />
      <Spacing height={DimensionConstants.sixteen} />
      <TouchableOpacity>
        <Text style={Styles.loginWithPhone}>Login with phone number</Text>
      </TouchableOpacity>
      <Spacing height={DimensionConstants.fifty} />
      <Text style={Styles.continue}>or continue with</Text>
      <Spacing height={DimensionConstants.ten} />
      <CustomButton
        textColor={theme.blackText}
        borderColor={theme.buttonBorder}
        color={theme.background}
        text={t('Continue with Google')}
        icon={<GoogleIcon />}
        onPress={signIn}
      />
      <Spacing height={DimensionConstants.ten} />
      <CustomButton
        textColor={theme.blackText}
        borderColor={theme.buttonBorder}
        color={theme.background}
        text={t('Continue with Apple')}
        icon={<AppleIcon />}
      />
      <Spacing height={DimensionConstants.twentyFour} />
      <Text style={Styles.terms}>
        By clicking login you agree to recognates{' '}
        <Text style={Styles.termBlue}>Terms of use </Text>
        and <Text style={Styles.termBlue}>Privacy policy</Text>
      </Text>
    </MainBackground>
  );
};

export default LoginScreen;
