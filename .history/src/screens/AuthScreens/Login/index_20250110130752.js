import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
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

const LoginScreen = () => {
  const {t, i18n} = useTranslation();
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
      <View style={styles.welcomeView}>
        <BackIcon />
        <Text style={styles.welcomeText}>{t('Welcome')}</Text>
      </View>
      <View style={styles.sigInTextView}>
        <Text style={styles.signInText}>{t('Sign in to your Account')}</Text>
      </View>
      <View style={styles.enterMailView}>
        <Text
          style={styles.enterMailText}>
          {t('Enter your email and password to get start.')}
        </Text>
      </View>
      <View style={styles.textInputParentView}>
        <View style={styles.textInputView}>
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
        <View style={styles.textInputView}>
          <PasswordIcon marginRight={DimensionConstants.twelve} />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={handlePasswordChange}
            placeholderTextColor="#5E6368"
          />
        </View>
      </View>
      <View style={styles.resetPasswordView}>
        <Text
          style={styles.resetPasswordText}>
          I don’t remember password?{' '}
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'black',
            }}>
            Reset
          </Text>
        </Text>
      </View>
      <View style={{marginTop: DimensionConstants.twentyFour}}>
        <CustomButton text={t('Login')} />
      </View>
      <TouchableOpacity style={{marginTop: DimensionConstants.sixteen}}>
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
      <View style={{marginTop: DimensionConstants.fifty}}>
        <Text
          style={{
            color: 'rgba(0, 0, 0, 0.4)',
            fontSize: 14,
            fontWeight: '500',
            textAlign: 'center',
          }}>
          or continue with
        </Text>
      </View>
      <View style={{marginTop: DimensionConstants.ten}}>
        <CustomButton
          textColor={'black'}
          borderColor={'#F0F1F2'}
          color={'#FFFFFF'}
          text={t('Continue with Google')}
          icon={<GoogleIcon />}
        />
      </View>
      <View style={{marginTop: DimensionConstants.ten}}>
        <CustomButton
          textColor={'black'}
          borderColor={'#F0F1F2'}
          color={'#FFFFFF'}
          text={t('Continue with Google')}
          icon={<AppleIcon />}
        />
      </View>
      <View style={{marginTop: DimensionConstants.twentyFour}}>
        <Text style={{color: '#889CA3', fontSize: 12, fontWeight: '400'}}>
          By clicking login you agree to recognates{' '}
          <Text
            style={{
              color: '#005BBB',
              fontWeight: '500',
              lineHeight: DimensionConstants.twentyTwo,
            }}>
            Terms of use{' '}
          </Text>
          and{' '}
          <Text style={{color: '#005BBB', fontWeight: '500'}}>
            Privacy policy
          </Text>
        </Text>
      </View>
    </MainBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  textInputView: {
    marginTop: DimensionConstants.ten,
    borderColor: '#6B737A1A',
    borderWidth: DimensionConstants.one,
    borderRadius: DimensionConstants.thirty,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: DimensionConstants.eighteen,
  },
  welcomeView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: DimensionConstants.fifteen,
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: DimensionConstants.twentyFour,
  },
  sigInTextView: {
    marginTop: DimensionConstants.twentyFour,
  },
  signInText: {
    fontSize: 32,
    fontWeight: '600',
  },
  enterMailView: {
    marginTop: DimensionConstants.twentyFour
  },
  enterMailText : {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.4)',
  },
  textInputParentView: {
    marginTop: DimensionConstants.twentyFour
  },
  resetPasswordView: {
    marginTop: DimensionConstants.eight
  },
  resetPasswordText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.4)',
  }
});
