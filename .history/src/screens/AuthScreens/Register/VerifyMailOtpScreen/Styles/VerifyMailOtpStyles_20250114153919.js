
import { DimensionConstants } from "../../../../../constants/DimensionConstants";
export const RegisterStyles = theme =>
    StyleSheet.create({
        title: {
      fontSize: DimensionConstants.thirtyTwo,
      fontWeight: '600',
      maxWidth: '80%',
    },
    infoText: {
      color: theme.lightText,
      fontWeight: '500',
      fontSize: DimensionConstants.fourteen,
      lineHeight: DimensionConstants.twentyFour,
    },
    emailText: {
      color: theme.text,
      fontWeight: '600',
      fontSize: DimensionConstants.fourteen,
    },
    inputContainer: {
      borderWidth: 1,
      borderColor: theme.darkBorderColor,
      alignItems: 'center',
      borderRadius: DimensionConstants.thirty,
      paddingHorizontal: DimensionConstants.sixteen,
      height: DimensionConstants.fortyEight,
      flexDirection: 'row',
    },
    input: {
      marginLeft: DimensionConstants.ten,
      fontSize: DimensionConstants.fourteen,
      flex: 1, // To allow the input to expand
    },
    resendText: {
      color: theme.text,
      fontWeight: '600',
      fontSize: DimensionConstants.fourteen,
    },
    footerText: {
      color: theme.lightText,
      fontWeight: '500',
      fontSize: DimensionConstants.fourteen,
      lineHeight: DimensionConstants.twentyFour,
    },
    footerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  };