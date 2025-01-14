import {View, Text, TouchableOpacity} from 'react-native';
import React , {useEffect} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';



const RegisterScreen = () => {
   

  return (
    <View>
      <TouchableOpacity>
        <Text>google sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
