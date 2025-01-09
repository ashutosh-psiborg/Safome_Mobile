import {View, Text} from 'react-native';
import React from 'react';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';

const RegisterScreen = () => {GoogleSignin.configure();



  return (
    <View>
      <Text>RegisterScreen</Text>
    </View>
  );
};

export default RegisterScreen;
