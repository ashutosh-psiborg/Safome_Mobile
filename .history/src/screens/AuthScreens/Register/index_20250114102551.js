import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import BackIcon from '../../../assets/icons/BackIcon';
import MainBackground from '../../../components/MainBackground';
import { DimensionConstants } from '../../../constants/DimensionConstants';
import { Picker } from '@react-native-picker/picker';

const RegisterScreen = () => {
  const [signUpData, setSignUpData] = useState({
    email: '',
    fullName: '',
    phoneNumber: '',
    country: '',
  });

  const handleChange = (field, value) => {
    setSignUpData({ ...signUpData, [field]: value });
  };

  return (
    <MainBackground>
      <View style={styles.header}>
        <TouchableOpacity>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.headerText}>Create account</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          value={signUpData.email}
          onChangeText={(text) => handleChange('email', text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Full Name"
          value={signUpData.fullName}
          onChangeText={(text) => handleChange('fullName', text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Phone Number"
          value={signUpData.phoneNumber}
          onChangeText={(text) => handleChange('phoneNumber', text)}
          keyboardType="phone-pad"
        />

        {/* Country Picker */}
        <Picker
          selectedValue={signUpData.country}
          onValueChange={(itemValue) => handleChange('country', itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select Country" value="" />
          <Picker.Item label="India" value="India" />
          <Picker.Item label="United States" value="USA" />
          <Picker.Item label="United Kingdom" value="UK" />
        </Picker>
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
    borderRadius: DimensionConstants.ten,
    paddingHorizontal: DimensionConstants.ten,
    height: DimensionConstants.forty,
    marginBottom: DimensionConstants.twenty,
    fontSize: 14,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: DimensionConstants.ten,
    height: DimensionConstants.forty,
    justifyContent: 'center',
    marginBottom: DimensionConstants.twenty,
  },
});

export default RegisterScreen;
