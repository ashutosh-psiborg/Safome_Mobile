import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import MainBackground from '../../../../components/MainBackground';
import CustomHeader from '../../../../components/CustomHeader';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../../../theme/ThemeContext';
import Spacing from '../../../../components/Spacing';
import {DimensionConstants} from '../../../../constants/DimensionConstants';
import CustomButton from '../../../../components/CustomButton';
import {VerifyMailOtpStyles} from '../VerifyMailOtpScreen/Styles/VerifyMailOtpStyles';
import {ImageConstants} from '../../../../constants/ImageConstants';

const BioMetricScreen = ({route, navigation}) => {
  const {theme} = useTheme();

  const {t} = useTranslation();
  const styles = VerifyMailOtpStyles(theme);

  const handleChange = value => {
    setPassword(value);
  };
  const handleconfirmChange = value => {
    setConfirmPassword(value);
  };

  return (
      <MainBackground style={ { backgroundColor: 'green' } }>
          <View style = {{backgroundColor: 'red',flex :1}}>
      <CustomHeader
        title={t('Biometric')}
        backPress={() => navigation.goBack()}
      />
      <Spacing height={DimensionConstants.thirtyEight} />
      <Text style={styles.title}>{t('Enable Biometric Security')}</Text>
      <Spacing height={DimensionConstants.twentyFour} />
      <View style={{maxWidth: '80%'}}>
        <Text style={styles.infoText}>
          {t(
            'Unlock your account with just a glance or a touch. Say goodbye to passwords and simplify your sign-in.',
          )}
        </Text>
      </View>
      <Image
        source={ImageConstants.texturedPaper}
        style={{height: 102, borderRadius: 30 , }}
      />

      <CustomButton
        onPress={() => navigation.navigate('BioMetricScreen')}
        text={t('Enable')}
              />
              </View>
    </MainBackground>
  );
};

export default BioMetricScreen;
