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
            placeholder="Email"
            value={signUpData.email}
            onChangeText={text => handleChange('email', text)}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.textInput}>
          <GlobeIcon />

          <TextInput
            placeholder="Full Name"
            value={signUpData.fullName}
            onChangeText={text => handleChange('fullName', text)}
          />
        </View>
        <View style={styles.textInput}>
          <GlobeIcon />

          <TextInput
            placeholder="Phone Number"
            value={signUpData.phoneNumber}
            onChangeText={text => handleChange('phoneNumber', text)}
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.textInput}>
          <GlobeIcon />

          <Picker
            selectedValue={signUpData.country}
            onValueChange={itemValue => handleChange('country', itemValue)}
            style={styles.picker}>
            <Picker.Item label="Select Country" value="" />
            <Picker.Item label="India" value="India" />
            <Picker.Item label="United States" value="USA" />
            <Picker.Item label="United Kingdom" value="UK" />
          </Picker>
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
    alignItems : 'center',
    borderRadius: DimensionConstants.thirty,
    paddingHorizontal: DimensionConstants.sixteen,
    height: DimensionConstants.fortyEight,
    marginBottom: DimensionConstants.twenty,
    fontSize: 14,
    flexDirection : 'row'
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: DimensionConstants.ten,
    height: DimensionConstants.hundred,
    justifyContent: 'center',
    marginBottom: DimensionConstants.twenty,
  },
});

export default RegisterScreen;
