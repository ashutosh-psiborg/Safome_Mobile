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

const VerifyMailOtpScreen = ({route, navigation}) => {
  const {theme} = useTheme();
  const {email, phoneNumber} = route.params;
  const [code, setCode] = useState('');
  const {t} = useTranslation();

  const handleChange = value => {
    setCode(value);
  };

  const styles = {
    title: {
      fontSize: DimensionConstants.thirtyTwo,
      fontWeight: '600',
      maxWidth: '80%',
    },
    infoText: {
      color: theme.lightText,
      fontWeight: '500',
      fontSize: DimensionConstants.fourteen,
      lineHeight: DimensionConstants.twentyFour,
    },
    emailText: {
      color: theme.text,
      fontWeight: '600',
      fontSize: DimensionConstants.fourteen,
    },
    inputContainer: {
      borderWidth: 1,
      borderColor: theme.darkBorderColor,
      alignItems: 'center',
      borderRadius: DimensionConstants.thirty,
      paddingHorizontal: DimensionConstants.sixteen,
      height: DimensionConstants.fortyEight,
      flexDirection: 'row',
    },
    input: {
      marginLeft: DimensionConstants.ten,
      fontSize: DimensionConstants.fourteen,
      flex: 1, // To allow the input to expand
    },
    resendText: {
      color: theme.text,
      fontWeight: '600',
      fontSize: DimensionConstants.fourteen,
    },
    footerText: {
      color: theme.lightText,
      fontWeight: '500',
      fontSize: DimensionConstants.fourteen,
      lineHeight: DimensionConstants.twentyFour,
    },
    footerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  };

  return (
    <MainBackground>
      <CustomHeader title={t('Verify Email')} backPress={() => navigation.goBack()} />
      <Spacing height={DimensionConstants.thirtyEight} />
      <Text style={styles.title}>{t('Please verify your Email address')}</Text>
      <Spacing height={DimensionConstants.twentyFour} />
      <View style={{maxWidth: '80%'}}>
        <Text style={styles.infoText}>
          {t('We have sent you a code to')}{' '}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.emailText}>{email}</Text> {t('Enter the code below.')}
        </Text>
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
      <CustomButton text={t('Continue')} />
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

export default VerifyMailOtpScreen;
