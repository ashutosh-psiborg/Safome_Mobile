import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import BackIcon from '../../../assets/icons/BackIcon';
import MainBackground from '../../../components/MainBackground';
import {DimensionConstants} from '../../../constants/DimensionConstants';
import GlobeIcon from '../../../assets/icons/GlobeIcon';
import RNPickerSelect from 'react-native-picker-select';
import CustomButton from '../../../components/CustomButton';
import CustomHeader from '../../../components/CustomHeader';
import { RegisterStyles } from './Styles/RegisterStyles';
import { useTheme } from '../../../theme/ThemeContext';
import {useTranslation} from 'react-i18next';


const RegisterScreen = () => {
  const {theme} = useTheme();
  const {t} = useTranslation();
  const styles = RegisterStyles(theme);
  const [signUpData, setSignUpData] = useState({
    email: '',
    fullName: '',
    phoneNumber: '',
    country: '',
  });

  const handleChange = (field, value) => {
    setSignUpData({...signUpData, [field]: value});
  };
  const onSubmit = () => {
    console.log('Sign Up Data:', signUpData);
  };

  return (
    <MainBackground>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View>
          <CustomHeader title={t('Create account')} />
          <View style={styles.formContainer}>
            <View style={styles.textInput}>
              <GlobeIcon />
              <TextInput
                style={styles.inputField}
                placeholder={ t("Full name") }
                value={signUpData.fullName}
                onChangeText={text => handleChange('fullName', text)}
                placeholderTextColor={'#5E6368'}
              />
            </View>

            <View style={styles.textInput}>
              <GlobeIcon />
              <TextInput
                style={styles.inputField}
                placeholder="Email Address"
                value={signUpData.email}
                onChangeText={text => handleChange('email', text)}
                keyboardType="email-address"
                placeholderTextColor={'#5E6368'}
              />
            </View>

            <View style={styles.textInput}>
              <GlobeIcon />
              <TextInput
                style={styles.inputField}
                placeholder={ "Phone number" }
                value={signUpData.phoneNumber}
                onChangeText={text => handleChange('phoneNumber', text)}
                keyboardType="phone-pad"
                placeholderTextColor={'#5E6368'}
              />
            </View>

            <View style={styles.textInput}>
              <GlobeIcon />
              <View style={styles.pickerContainer}>
                <RNPickerSelect
                  onValueChange={value => handleChange('country', value)}
                  items={[
                    {label: 'India', value: 'India'},
                    {label: 'United States', value: 'United States'},
                    {label: 'Australia', value: 'Australia'},
                  ]}
                  style={{
                    inputAndroid: {
                      ...styles.pickerInput,
                      color: signUpData.country ? '#000' : '#5E6368', // Dynamic text color
                    },
                    inputIOS: {
                      ...styles.pickerInput,
                      color: signUpData.country ? '#000' : '#5E6368', // Dynamic text color
                    },
                    placeholder: {
                      color: '#5E6368',
                    },
                  }}
                  placeholder={{
                    label: t('Country'),
                    value: null,
                  }}
                />
              </View>
            </View>
            <Text
              style={{
                fontSize: 12,
                lineHeight: 22,
                fontWeight: '400',
                color: '#889CA3',
              }}>
              By creating an account , I agree to
              <Text style={{fontSize: 12, fontWeight: '500', color: '#005BBB'}}>
                {' '}
                Terms of use{' '}
              </Text>
              and{' '}
              <Text style={{fontSize: 12, fontWeight: '500', color: '#005BBB'}}>
                Privacy policy
              </Text>
            </Text>
          </View>
        </View>
        <CustomButton text={'Create account'} onPress={onSubmit} />
      </View>
    </MainBackground>
  );
};



export default RegisterScreen;
