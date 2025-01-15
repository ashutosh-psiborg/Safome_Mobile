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
import ReactNativeBiometrics from 'react-native-biometrics';

const BioMetricScreen = ({route, navigation}) => {
  const {theme} = useTheme();
  const checkBiometricAvailability = async () => {
      const rnBiometrics = new ReactNativeBiometrics();
      console.log("+++++",rnBiometrics)
    const {available, biometryType} = await rnBiometrics.isSensorAvailable();
    console.log("+++++",available,"++++",)

    if (available) {
      if (biometryType === ReactNativeBiometrics.TouchID) {
        Alert.alert('Biometric', 'Touch ID is available');
      } else if (biometryType === ReactNativeBiometrics.FaceID) {
        Alert.alert('Biometric', 'Face ID is available');
      } else {
        Alert.alert('Biometric', 'Biometric sensor is available');
      }
    } else {
      Alert.alert('Biometric', 'Biometric authentication is not available');
    }
  };
  const handleBiometricAuthentication = async () => {
    const rnBiometrics = new ReactNativeBiometrics();

    const {success} = await rnBiometrics.simplePrompt({
      promptMessage: 'Authenticate with Biometrics',
      cancelButtonText: 'Cancel',
    });

    if (success) {
      Alert.alert('Success', 'Biometric authentication successful!');
    } else {
      Alert.alert('Failed', 'Biometric authentication failed or was canceled');
    }
  };

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
        <View>
          <Image
            source={ImageConstants.texturedPaper}
            style={{
              height: DimensionConstants.oneHundredThree,
              borderRadius: 30,
              width: 'auto',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: DimensionConstants.eighteen,
              position: 'absolute',
              paddingVertical: DimensionConstants.sixteen,
            }}>
            <SecurityTickIcon />
            <View style={{paddingHorizontal: DimensionConstants.ten}}>
              <Text style={styles.resendText}>Experience instant access</Text>
              <Text style={styles.infoText}>
                No passwords, no hassle, just secure and effortless verification
              </Text>
            </View>
          </View>
        </View>
        <CustomButton onPress={checkBiometricAvailability} text={t('Enable')} />
        <CustomButton onPress={handleBiometricAuthentication} text={t('handle')} />
      </View>
    </MainBackground>
  );
};

export default BioMetricScreen;
