import {View, Text,TextInput} from 'react-native';
import React , {} from 'react';
import MainBackground from '../../../components/MainBackground';
import BackIcon from '../../../assets/icons/BackIcon';
import {useTranslation} from 'react-i18next';
import {DimensionConstants} from '../../../constants/DimensionConstants';
const LoginScreen = () => {
  const {t, i18n} = useTranslation();
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
    if (onEmailChange) onEmailChange(text); // Trigger callback if provided
  };

  const handleMobileChange = (text) => {
    setMobile(text);
    if (onMobileChange) onMobileChange(text); // Trigger callback if provided
  };
  return (
    <MainBackground>
      <View style={{flexDirection: 'row', alignItems: 'center',marginLeft : DimensionConstants.fifteen}}>
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
      <View style = {{marginTop : DimensionConstants.twentyFour}}>
        <Text style={{fontSize: 32, fontWeight: '600'}}>
          {t('Sign in to your Account')}
        </Text>
      </View>
      <View style = {{marginTop : DimensionConstants.twentyFour}}>
        <Text style={{fontSize: 14, fontWeight: '500',color : 'rgba(0, 0, 0, 0.4)'}}>
          {t('Enter your email and password to get start.')}
        </Text>
      </View>
      <View>
      <TextInput
        placeholder="Enter Email"
        keyboardType="email-address"
        value={email}
        onChangeText={handleEmailChange}
        autoCapitalize="none"
        placeholderTextColor="#aaa"
      />
      <TextInput
        placeholder="Enter Mobile"
        keyboardType="phone-pad"
        value={mobile}
        onChangeText={handleMobileChange}
        maxLength={10} // Restrict mobile number to 10 digits
        placeholderTextColor="#aaa"
        />
        </View>
    </MainBackground>
  );
};

export default LoginScreen;
