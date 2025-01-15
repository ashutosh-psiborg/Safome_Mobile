import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Alert} from 'react-native';
import MainBackground from '../../../../components/MainBackground';
import CustomHeader from '../../../../components/CustomHeader';
import Spacing from '../../../../components/Spacing';
import {DimensionConstants} from '../../../../constants/DimensionConstants';
import {useTheme} from '../../../../theme/ThemeContext';
import {useNavigation} from '@react-navigation/native';

const SecurityPinScreen = () => {
  const {theme} = useTheme();
  const navigation = useNavigation();
  const [pin, setPin] = useState('');
  const correctPin = '1234'; // Replace with the actual PIN logic

  const handlePinChange = (text) => {
    if (/^\d*$/.test(text) && text.length <= 4) {
      setPin(text);
      if (text.length === 4) {
        if (text === correctPin) {
          navigation.navigate('LoginScreen'); // Replace 'Login' with your actual route name
        } else {
          Alert.alert('Incorrect PIN', 'Please try again.');
          setPin('');
        }
      }
    }
  };

  return (
    <MainBackground>
      <CustomHeader title={'Biometric'} />
      <Spacing height={DimensionConstants.thirtyEight} />
      <Text style={styles.title}>Add security</Text>
      <Text style={styles.title}>Pin</Text>
      <Spacing height={DimensionConstants.twentyFour} />
      <Text style={[styles.instruction, {color: theme.lightText}]}>
        Enter 4 digit security pin
      </Text>
      <Spacing height={DimensionConstants.twentyFour} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.pinInput}
          keyboardType="number-pad"
          secureTextEntry
          value={pin}
          onChangeText={handlePinChange}
          maxLength={4}
        //   placeholder="••••"
        />
      </View>
    </MainBackground>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: DimensionConstants.thirtyTwo,
    fontWeight: '600',
  },
  instruction: {
    fontWeight: '500',
    fontSize: DimensionConstants.fourteen,
    lineHeight: DimensionConstants.twentyFour,
  },
  inputContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: DimensionConstants.twentyFour,
  },
  pinInput: {
    fontSize: DimensionConstants.twentyFour,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 16, // Creates spacing between dots
    width: 150,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    color: '#000', // Adjust based on your theme
  },
});

export default SecurityPinScreen;
