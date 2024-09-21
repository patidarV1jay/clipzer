import { StyleSheet } from 'react-native';
import {
  Color,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../../theme';
import { ColorType } from '../../../types';

const styling = (theme: keyof ColorType) =>
  StyleSheet.create({
    signinImage: {
      height: verticleScale(700),
      width: horizontalScale(400),
      alignSelf: 'center',
    },
    signinViewStyles: {
      backgroundColor: Color[theme]?.loginColor,
      height: '100%',
      borderRadius: moderateScale(50),
      marginBottom:verticleScale(90)
    },
    signinText: {
      color: Color[theme]?.palindromeColor,
      fontSize: moderateScale(20),
      fontWeight: 'bold',
      margin: moderateScale(18),
      marginLeft: moderateScale(30),
    },
    textinput: {
      padding: moderateScale(5),
      marginHorizontal: horizontalScale(20),
      fontSize: moderateScale(18),
      flexDirection: 'row',
      margin: moderateScale(10),
      alignItems: 'center',
    },
    textinputField: {
      borderBottomWidth: 2,
      borderColor: Color[theme]?.palindromeColor,
      flex: 1,
      marginLeft: horizontalScale(10),
      paddingLeft: horizontalScale(10),
      padding: moderateScale(7),
      fontSize: moderateScale(16),
      color: Color[theme]?.palindromeColor,
      fontWeight: 'bold',
      justifyContent:'space-between',
      flexDirection:'row'
    },
    forgotPassword: {
      color: Color[theme]?.blue,
      fontWeight: 'bold',
      fontSize: moderateScale(15),
      alignSelf: 'flex-end',
      marginTop: verticleScale(5),
      marginRight: horizontalScale(25),
    },
    loginText: {
      alignSelf: 'center',
      fontSize: moderateScale(18),
      fontWeight: 'bold',
      color: Color[theme]?.commonWhite,
    },
    loginButton: {
      backgroundColor: Color[theme]?.button,
      padding: moderateScale(8),
      marginHorizontal: horizontalScale(20),
      borderRadius: moderateScale(10),
      marginTop: verticleScale(30),
    },
    line: {
      flex: 1,
      borderWidth: 1,
      borderColor: Color[theme]?.palindromeColor,
      height: 1,
    },
    lineView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: verticleScale(25),
      marginHorizontal: horizontalScale(18),
    },
    textOr: {
      color: Color[theme]?.palindromeColor,
      fontWeight: 'bold',
      fontSize: moderateScale(14),
      marginHorizontal: horizontalScale(5),
    },
    googleButton: {
      backgroundColor: Color[theme]?.lightGray,
      padding: moderateScale(8),
      marginHorizontal: horizontalScale(20),
      borderRadius: moderateScale(10),
      marginTop: verticleScale(30),
    },
    googleLoginText: {
      alignSelf: 'center',
      fontSize: moderateScale(18),
      fontWeight: 'bold',
      color: Color[theme]?.palindromeColor,
    },
    textRegister: {
      color: Color[theme]?.blue,
      fontWeight: 'bold',
      fontSize: moderateScale(18),
    },
    registerText: {
      alignSelf: 'center',
      color: Color[theme]?.palindromeColor,
    },
    registerView: {
      marginTop: verticleScale(40),
    },
    errorView: {
      marginHorizontal: horizontalScale(60),
    },
    errorText: {
      fontWeight: '400',
      fontSize: moderateScale(14),
      color: Color[theme]?.red,
    },
    container: {
      flex: 1,
      backgroundColor: Color[theme]?.lightGray,
    },
    emptyView: {
      height: verticleScale(110),
    },
    passwordInput:{
      fontSize: moderateScale(16),
      color: Color[theme]?.palindromeColor,
      fontWeight: 'bold',
      padding:0
    }
  });

export default styling;
