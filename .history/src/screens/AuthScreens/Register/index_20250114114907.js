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
import DownArrowIcon from '../../../assets/icons/DownArrowIcon';

const RegisterScreen = () => {
  const [signUpData, setSignUpData] = useState({
    email: '',
    fullName: '',
    phoneNumber: '',
    country: '',
  });

  const handleChange = (field, value) => {
    setSignUpData({...signUpData, [field]: value});
  };

  return (
    <MainBackground>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.headerText}>Create account</Text>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        {/* Full Name Input */}
        <View style={styles.textInput}>
          <GlobeIcon />
          <TextInput
            style={styles.inputField}
            placeholder="Full name"
            value={signUpData.fullName}
            onChangeText={text => handleChange('fullName', text)}
            placeholderTextColor={'#5E6368'}
          />
        </View>

        {/* Email Address Input */}
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
            placeholder="Phone number"
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
              onValueChange={ value => handleChange('country', value) }
              items={ [
                { label: 'India', value: 'India' },
                { label: 'United States', value: 'United States' },
                { label: 'Australia', value: 'Australia' },
              ] }
              style={ {
                inputAndroid: {
                  ...styles.pickerInput,
                  color: signUpData.country ? '#000' : '#5E6368', // Dynamic text color
                },
                inputIOS: {
                  ...styles.pickerInput,
                  color: signUpData.country ? '#000' : '#5E6368', // Dynamic text color
                },
                placeholder: {
                  color: '#5E6368', // Placeholder color for iOS
                },
                iconContainer: styles.customIconContainer,
              } }
              placeholder={ {
                label: 'Select Country',
                value: null,
              } }
              // Icon={ { color: 'red' } }
            />
          </View>
        </View>
      </View>
    </MainBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: DimensionConstants.fifteen,
    marginTop: DimensionConstants.twenty,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: DimensionConstants.twentyFour,
  },
  formContainer: {
    marginTop: DimensionConstants.thirtyTwo,
    paddingHorizontal: DimensionConstants.fifteen,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    borderRadius: DimensionConstants.thirty,
    paddingHorizontal: DimensionConstants.sixteen,
    height: DimensionConstants.fortyEight,
    marginBottom: DimensionConstants.twenty,
    fontSize: 14,
    flexDirection: 'row',
  },
  inputField: {
    marginLeft: DimensionConstants.ten,
  },
  pickerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  pickerInput: {
    color: '#000',
    fontSize: 14,
    paddingVertical: 0,
    marginLeft: DimensionConstants.six,
  },
  pickerIconContainer: {
    display: 'none', // Hide default picker icon
    color : 'red'
  },
});

export default RegisterScreen;
