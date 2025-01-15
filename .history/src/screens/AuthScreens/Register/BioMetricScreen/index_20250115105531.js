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
import SecurityTickIcon from '../../../../assets/icons/SecurityTickIcon';

const BioMetricScreen = ({route, navigation}) => {
  const {theme} = useTheme();

  const {t} = useTranslation();
  const styles = VerifyMailOtpStyles(theme);

  return (
    <MainBackground>
      <View>
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
        <Spacing height={DimensionConstants.twentyFour} />

        <Image
          source={ImageConstants.texturedPaper}
          style={{
            height: DimensionConstants.oneHundredThree,
            borderRadius: 30,
            width: 'auto',
          }}
        />
        <View style={{flexDirection: 'row',alignItems : 'center',paddingHorizontal : DimensionConstants.eighteen}}>
          <SecurityTickIcon />
          <View style = {{}}>
            <Text style={styles.resendText}>Experience instant access</Text>
            <Text style={styles.infoText}>
              No passwords, no hassle, just secure and effortless verification
            </Text>
          </View>
        </View>

        <CustomButton
          onPress={() => navigation.navigate('BioMetricScreen')}
          text={t('Enable')}
        />
      </View>
    </MainBackground>
  );
};

export default BioMetricScreen;
