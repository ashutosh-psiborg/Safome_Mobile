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
import Spacing from '../../../components/Spacing';

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
      <Spacing height={DimensionConstants.twentyFour} />
      <Text style={styles.signInText}>{t('Sign in to your Account')}</Text>
      <Spacing height={DimensionConstants.twentyFour} />
      <Text style={styles.enterMailText}>
        {t('Enter your email and password to get start.')}
      </Text>
      <Spacing height={DimensionConstants.twentyFour} />
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
      <Spacing height={DimensionConstants.eight} />
      <Text style={styles.resetPasswordText}>
        I don’t remember password? <Text style={styles.resetWord}>Reset</Text>
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
      <Text
        style={styles.con}>
        or continue with
      </Text>
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
  signInText: {
    fontSize: 32,
    fontWeight: '600',
  },
  enterMailText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.4)',
  },
  resetPasswordText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.4)',
  },
  resetWord: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
  },
  continue: {
    color: 'rgba(0, 0, 0, 0.4)',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  }
});
