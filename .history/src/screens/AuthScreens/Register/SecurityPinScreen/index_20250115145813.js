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

  const handlePinChange = text => {
    if (/^\d*$/.test(text) && text.length <= 4) {
      setPin(text);
      if (text.length === 4) {
        navigation.navigate('LoginScreen');
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
      <Spacing height={DimensionConstants.thirtyEight} />
      <View>
        <TextInput
          style={styles.pinInput}
          keyboardType="number-pad"
          secureTextEntry
          value={pin}
          onChangeText={handlePinChange}
          maxLength={4}
          autoFocus={true} // Automatically opens the number pad
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
  pinInput: {
    fontSize: DimensionConstants.oneHundred,
    fontWeight: '600',
    letterSpacing: DimensionConstants.twelve,
    color: '#005BBB',
  },
});

export default SecurityPinScreen;
