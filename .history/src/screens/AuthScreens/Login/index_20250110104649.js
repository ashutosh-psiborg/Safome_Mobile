import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import MainBackground from '../../../components/MainBackground';
import BackIcon from '../../../assets/icons/BackIcon';
import {useTranslation} from 'react-i18next';
import {DimensionConstants} from '../../../constants/DimensionConstants';
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: DimensionConstants.fifteen,
        }}>
        <BackIcon />
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            marginLeft: DimensionConstants.twentyFour,
          }}>
          {t('Welcome')}
        </Text>
      </View>
      <View style={{marginTop: DimensionConstants.twentyFour}}>
        <Text style={{fontSize: 32, fontWeight: '600'}}>
          {t('Sign in to your Account')}
        </Text>
      </View>
      <View style={{marginTop: DimensionConstants.twentyFour}}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
            color: 'rgba(0, 0, 0, 0.4)',
          }}>
          {t('Enter your email and password to get start.')}
        </Text>
      </View>
      <View style={{marginTop: DimensionConstants.twentyFour}}>
        <View
          style={{
            borderColor: '#6B737A1A',
            borderWidth: DimensionConstants.one,
            borderRadius: DimensionConstants.thirty,
            marginTop : DimensionConstants.ten
          }}>
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={handleEmailChange}
            autoCapitalize="none"
            placeholderTextColor="#aaa"
          />
        </View>
        <View
          style={{
            borderColor: '#6B737A1A',
            borderWidth: DimensionConstants.one,
            borderRadius: DimensionConstants.thirty,
          }}>          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={handlePasswordChange}
            placeholderTextColor="#aaa"
          />
        </View>
      </View>
    </MainBackground>
  );
};

export default LoginScreen;
