import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import BackIcon from '../../../assets/icons/BackIcon';
import MainBackground from '../../../components/MainBackground';
import { DimensionConstants } from '../../../constants/DimensionConstants';

const RegisterScreen = () => {
  const [signUpData, setSignUpData] = useState({
    email: '',
    
})

  return (
    <MainBackground>
      <View style = {{flexDirection : 'row',alignItems : 'center',marginLeft : DimensionConstants.fifteen}}>
        <TouchableOpacity>
          <BackIcon />
        </TouchableOpacity>
        <Text style = {{fontSize : 16 , fontWeight : '600',marginLeft : DimensionConstants.twentyFour}}>Create account</Text>
      </View>
    </MainBackground>
  );
};

export default RegisterScreen;
