import { DimensionConstants ,width} from "../../../../constants/DimensionConstants";
import { StyleSheet } from 'react-native';

export const RegisterStyles = (theme) => StyleSheet.create({
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
        borderColor: theme.borderColor,
        alignItems: 'center',
        borderRadius: DimensionConstants.thirty,
        paddingHorizontal: DimensionConstants.sixteen,
        height: DimensionConstants.fortyEight,
        marginBottom: DimensionConstants.twenty,
        fontSize: 14,
        flexDirection: 'row',
      },
      inputField: {
        marginLeft: DimensionConstants.ten,
      },
      pickerContainer: {
        flex: 1,
        justifyContent: 'center',
      },
      pickerInput: {
        color: them,
        fontSize: 14,
        paddingVertical: 0,
        marginLeft: DimensionConstants.six,
      },
    });