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
import {Picker} from '@react-native-picker/picker';
import GlobeIcon from '../../../assets/icons/GlobeIcon';
import RNPickerSelect from 'react-native-picker-select';

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
      <View style={styles.header}>
        <TouchableOpacity>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.headerText}>Create account</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.textInput}>
          <GlobeIcon />

          <TextInput
            style={{marginLeft: DimensionConstants.ten}}
            placeholder="Full name"
            value={signUpData.fullName}
            onChangeText={text => handleChange('fullName', text)}
            placeholderTextColor={'#5E6368'}
          />
        </View>
        <View style={styles.textInput}>
          <GlobeIcon />
          <TextInput
            style={{marginLeft: DimensionConstants.ten}}
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
            style={{marginLeft: DimensionConstants.ten}}
            placeholder="Phone number"
            value={signUpData.phoneNumber}
            onChangeText={text => handleChange('phoneNumber', text)}
            keyboardType="phone-pad"
            placeholderTextColor={'#5E6368'}
          />
        </View>

          {/* <Picker
            selectedValue={ signUpData.country }
            onValueChange={itemValue => handleChange('country', itemValue)}
            style={styles.picker}>
            <Picker.Item label="Select Country" value="" />
            <Picker.Item label="India" value="India" />
            <Picker.Item label="United States" value="USA" />
            <Picker.Item label="United Kingdom" value="UK" />
          </Picker> */}
        <RNPickerSelect
      onValueChange={(value) => console.log(value)}
          items={ [
        { label: 'India', value: 'India' },
        { label: 'United States', value: 'United States' },
        { label: 'Australia', value: 'hockey' },
      ]}
    />
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
  picker: {},
});

export default RegisterScreen;
