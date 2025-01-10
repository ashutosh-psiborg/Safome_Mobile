import { DimensionConstants } from "../../../../constants/DimensionConstants";
import { StyleSheet } from 'react-native';


export const loginStyles = (theme) => StyleSheet.create({
  textInputView: {
      marginTop: DimensionConstants.ten,
      borderColor: '#6B737A1A',
      borderWidth: DimensionConstants.one,
      borderRadius: DimensionConstants.thirty,
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: DimensionConstants.eighteen,
    },
    welcomeView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: DimensionConstants.fifteen,
    },
    welcomeText: {
      fontSize: 16,
      fontWeight: '600',
      marginLeft: DimensionConstants.twentyFour,
    },
    signInText: {
      fontSize: 32,
      fontWeight: '600',
    },
    enterMailText: {
      fontSize: 14,
      fontWeight: '500',
      color: theme.lightText,
    },
    resetPasswordText: {
      fontSize: 14,
      fontWeight: '500',
      color: theme.lightText,
    },
    resetWord: {
      fontSize: 14,
      fontWeight: '600',
      color: 'black',
    },
    continue: {
      color: theme.lightText,
      fontSize: 14,
      fontWeight: '500',
      textAlign: 'center',
    },
    terms: {
      color: '#889CA3',
      fontSize: 12,
      fontWeight: '400',
      lineHeight: DimensionConstants.twentyTwo,
    },
    termBlue: {
      color: theme.primary,
      fontWeight: '500',
  },
  loginWithPhone : {
    color: theme.primary,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  }
  });
  