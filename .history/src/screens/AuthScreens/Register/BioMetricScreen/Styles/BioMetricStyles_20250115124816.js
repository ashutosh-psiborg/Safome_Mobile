import {DimensionConstants} from '../../../../../constants/DimensionConstants';
import {StyleSheet} from 'react-native';

export const BioMetricStyles = theme =>
  StyleSheet.create({
    title: {
      fontSize: DimensionConstants.thirtyTwo,
      maxWidth: '80%',
      fontWeight: '500',
    },
    infoText: {
      color: theme.lightText,
      fontWeight: '500',
      fontSize: DimensionConstants.fourteen,
      lineHeight: DimensionConstants.twentyFour,
    },

    resendText: {
      color: theme.text,
      fontWeight: '600',
      fontSize: DimensionConstants.fourteen,
    },
  });
