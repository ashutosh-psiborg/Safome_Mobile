import {View, Text, TextInput, TouchableOpacity, Pressable} from 'react-native';
import React, {useState} from 'react';
import MainBackground from '../../../../components/MainBackground';
import CustomHeader from '../../../../components/CustomHeader';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../../../theme/ThemeContext';
import Spacing from '../../../../components/Spacing';
import {DimensionConstants} from '../../../../constants/DimensionConstants';
import CustomButton from '../../../../components/CustomButton';
import GlobeIcon from '../../../../assets/icons/GlobeIcon';

const VerifyMailOtpScreen = ({route,navigation}) => {
  const {theme} = useTheme();
  const {email} = route.params;
  const [code, setCode] = useState('');
  const {t} = useTranslation();
  const handleChange = value => {
    setCode({value});
  };
  return (
    <MainBackground>
      <CustomHeader title={t('Verify Email')} backPress = {()=>navigation.goBack()} />
      <Spacing height={DimensionConstants.thirtyEight} />
      <Text style={{fontSize: 32, fontWeight: '600', maxWidth: '80%'}}>
        {t('Please verify your Email address')}
      </Text>
      <Spacing height={DimensionConstants.twentyFour} />
      <View style={{maxWidth: '80%'}}>
        <Text
          style={{
            color: theme.lightText,
            fontWeight: '500',
            fontSize: DimensionConstants.fourteen,
            lineHeight: DimensionConstants.twentyFour,
          }}>
          {t('We have sent you a code to')}{' '}
        </Text>
        <Text
          style={{
            color: theme.lightText,
            fontWeight: '500',
            fontSize: DimensionConstants.fourteen,
            lineHeight: DimensionConstants.twentyFour,
          }}>
          <Text
            style={{
              color: theme.text,
              fontWeight: '600',
              fontSize: DimensionConstants.fourteen,
            }}>
            {email}
          </Text>{' '}
          {t('Enter the code below.')}
        </Text>
      </View>
      <Spacing height={DimensionConstants.thirtyOne} />
      <View
        style={{
          borderWidth: 1,
          borderColor: theme.darkBorderColor,
          alignItems: 'center',
          borderRadius: DimensionConstants.thirty,
          paddingHorizontal: DimensionConstants.sixteen,
          height: DimensionConstants.fortyEight,
          fontSize: DimensionConstants.fourteen,
          flexDirection: 'row',
        }}>
        <GlobeIcon />
        <TextInput
          style={{marginLeft: DimensionConstants.ten}}
          placeholder={t('Enter code')}
          value={code}
          onChangeText={text => handleChange(text)}
          keyboardType="phone-pad"
          placeholderTextColor={theme.placeHolderText}
          maxLength={6}
        />
      </View>
      <CustomButton text={t('Continue')} />
      <Spacing height={DimensionConstants.sixteen} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={{
            color: theme.lightText,
            fontWeight: '500',
            fontSize: DimensionConstants.fourteen,
            lineHeight: DimensionConstants.twentyFour,
          }}>
          {t('Don’t see an email?')}
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: theme.text,
              fontWeight: '600',
              fontSize: DimensionConstants.fourteen,
            }}>
            {' '}
            Resend
          </Text>
        </TouchableOpacity>
      </View>
    </MainBackground>
  );
};

export default VerifyMailOtpScreen;
