import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import MainBackground from '../../../components/MainBackground';
import BackIcon from '../../../assets/icons/BackIcon';
import {useTranslation} from 'react-i18next';
import {DimensionConstants} from '../../../constants/DimensionConstants';
import MailIcon from '../../../assets/icons/MailIcon';
import PasswordIcon from '../../../assets/icons/PasswordIcon';
import CustomButton from '../../../components/CustomButton';
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
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: DimensionConstants.eighteen,
          }}>
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
        <View
          style={{
            marginTop: DimensionConstants.ten,
            borderColor: '#6B737A1A',
            borderWidth: DimensionConstants.one,
            borderRadius: DimensionConstants.thirty,
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: DimensionConstants.eighteen,
          }}>
          <PasswordIcon marginRight={DimensionConstants.twelve} />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={handlePasswordChange}
            placeholderTextColor="#5E6368"
          />
        </View>
      </View>
      <View style = {{marginTop : DimensionConstants.eight}}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
            color: 'rgba(0, 0, 0, 0.4)',
          }}>
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
      <View style = {{marginTop:DimensionConstants.twentyFour}}>
      <CustomButton text={ t('Login') } />
      </View>
      <View style = {{marginTop : DimensionConstants.sixteen}}>
        <Text style = {{color : '#005BBB',fontSize : 14 , fontWeight : '500',textAlign : 'center'}}>Login with phone number</Text>
      </View>
      <View style = {{marginTop : DimensionConstants.fifty}}>
        <Text style = {{color : 'rgba(0, 0, 0, 0.4)',fontSize : 14 , fontWeight : '500',textAlign : 'center'}}>or continue with</Text>
      </View>
    </MainBackground>
  );
};

export default LoginScreen;
