import {View, Text, Image, Alert} from 'react-native';
import React from 'react';
import MainBackground from '../../../../components/MainBackground';
import CustomHeader from '../../../../components/CustomHeader';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../../../theme/ThemeContext';
import Spacing from '../../../../components/Spacing';
import CustomButton from '../../../../components/CustomButton';
import {BioMetricStyles} from './Styles/BioMetricStyles';
import {ImageConstants} from '../../../../constants/ImageConstants';
import SecurityTickIcon from '../../../../assets/icons/SecurityTickIcon';
import ReactNativeBiometrics from 'react-native-biometrics';
import {DimensionConstants} from '../../../../constants/DimensionConstants';

const BioMetricScreen = ({route, navigation}) => {
  const {theme} = useTheme();
  const {t} = useTranslation();
  const styles = BioMetricStyles(theme);

  const authenticateWithBiometrics = async () => {
    const rnBiometrics = new ReactNativeBiometrics();

    try {
      const {available, biometryType} = await rnBiometrics.isSensorAvailable();

      if (!available) {
        Alert.alert(
          'Biometric',
          'Biometric authentication is not available on this device.',
        );
        return;
      }

      if (biometryType === ReactNativeBiometrics.TouchID) {
        console.log('Using Touch ID');
      } else if (biometryType === ReactNativeBiometrics.FaceID) {
        console.log('Using Face ID');
      } else {
        console.log('Using generic biometric sensor');
      }

      const {success} = await rnBiometrics.simplePrompt({
        promptMessage: 'Authenticate with Biometrics',
        cancelButtonText: 'Cancel',
      });

      if (success) {
        Alert.alert('Success', 'Biometric authentication successful!');
        setTimeout(() => {
          navigation.navigate('SecurityPinScreen');
        }, 10);
      } else {
        Alert.alert(
          'Failed',
          'Biometric authentication failed or was canceled.',
        );
      }
    } catch (error) {
      console.error('Biometric authentication error:', error);
      Alert.alert(
        'Error',
        'An error occurred during biometric authentication.',
      );
    }
  };

  return (
    <MainBackground>
      <View style={styles.container}>
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
              style={styles.imageContainer}
            />
            <View style={styles.overlayContainer}>
              <SecurityTickIcon />
              <View style={styles.overlayTextContainer}>
                <Text style={styles.resendText}>Experience instant access</Text>
                <Text style={styles.infoText}>
                  No passwords, no hassle, just secure and effortless
                  verification
                </Text>
              </View>
            </View>
          </View>
        </View>

        <CustomButton onPress={authenticateWithBiometrics} text={t('Enable')} />
      </View>
    </MainBackground>
  );
};

export default BioMetricScreen;
