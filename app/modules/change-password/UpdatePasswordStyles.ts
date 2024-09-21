import { StyleSheet } from 'react-native';
import {
  Color,
  horizontalScale,
  moderateScale,
  verticleScale
} from '../../theme';
import { ColorType } from '../../types';

const styling = (theme: keyof ColorType) =>
  StyleSheet.create({
    errorView: {
      marginHorizontal: horizontalScale(60),
    },
    errorText: {
      fontWeight: '400',
      fontSize: moderateScale(14),
      color: Color[theme]?.red,
    },
    input: {
      color: Color[theme]?.palindromeColor,
      fontSize: moderateScale(16),
      marginLeft: horizontalScale(5),
      padding:0
    },
    resetText: {
      color: Color[theme]?.palindromeColor,
      fontWeight: 'bold',
      fontSize: moderateScale(17),
      padding: moderateScale(20),
      alignSelf: 'center',
    },
    update: {
      backgroundColor: Color[theme]?.themeColor,
      justifyContent: 'center',
    },
    updateText: {
      color: Color[theme]?.palindromeColor,
      fontWeight: 'bold',
      fontSize: moderateScale(14),
    },
    inputText: {
      backgroundColor: Color[theme]?.white,
    },
    accountContainer: {
      margin: moderateScale(10),
    },
    accountText: {
      fontWeight: 'bold',
      fontSize: moderateScale(14),
      color: Color[theme]?.gray,
    },
    changePasswordContainer: {
      backgroundColor: Color[theme]?.white,
      padding: moderateScale(15),
      marginTop: verticleScale(15),
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: moderateScale(10),
    },
    changePasswordText: {
      fontWeight: '500',
      fontSize: moderateScale(16),
      marginLeft: horizontalScale(20),
    },
    container: {
      flex: 1,
      backgroundColor: Color[theme]?.lightGray,
      marginTop: verticleScale(5),
    },
  });

export default styling;
