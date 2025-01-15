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
import {VerifyMailOtpStyles} from '../VerifyMailOtpScreen/Styles/VerifyMailOtpStyles';

const BioMetricScreen = ({route, navigation}) => {
  const {theme} = useTheme();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {t} = useTranslation();
  const styles = VerifyMailOtpStyles(theme);

  const handleChange = value => {
    setPassword(value);
  };
  const handleconfirmChange = value => {
    setConfirmPassword(value);
  };

  return (
    <MainBackground>
      <CustomHeader
        title={t('Biometric')}
        backPress={() => navigation.goBack()}
      />
      <Spacing height={DimensionConstants.thirtyEight} />
      <Text style={styles.title}>{t('Enable Biometric')}</Text>
      <Spacing height={DimensionConstants.twentyFour} />
      <Text style={styles.infoText}>
        {t('Enter new password to secure your account.')}{' '}
      </Text>

      <Spacing height={DimensionConstants.thirtyOne} />
      <View style={styles.inputContainer}>
        <GlobeIcon />
        <TextInput
          style={styles.input}
          placeholder={t('Create password')}
          value={password}
          onChangeText={text => handleChange(text)}
          placeholderTextColor={theme.placeHolderText}
        />
      </View>
      <Spacing height={DimensionConstants.fifteen} />
      <View style={styles.inputContainer}>
        <GlobeIcon />
        <TextInput
          style={styles.input}
          placeholder={t('Verify password')}
          value={confirmPassword}
          onChangeText={text => handleconfirmChange(text)}
          placeholderTextColor={theme.placeHolderText}
        />
      </View>
      <Spacing height={DimensionConstants.sixteen} />
      <CustomButton
        onPress={() => navigation.navigate('BioMetricScreen')}
        text={t('Continue')}
      />
    </MainBackground>
  );
};

export default BioMetricScreen;
