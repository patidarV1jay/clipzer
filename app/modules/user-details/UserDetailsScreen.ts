import { StyleSheet } from 'react-native';
import {
    Color,
    horizontalScale,
    moderateScale,
    verticleScale,
} from '../../theme';
import { ColorType } from '../../types';

const styling = (theme: keyof ColorType) =>
  StyleSheet.create({
    container: {
      marginTop: verticleScale(40),
      width: '70%',
      alignSelf: 'center',
      backgroundColor: Color[theme]?.themeColor,
      borderRadius: 10,
    },
    userImage: {
      height: verticleScale(300),
      width: horizontalScale(150),
      margin: moderateScale(8),
      borderRadius: moderateScale(100),
      alignSelf: 'center',
      position: 'absolute',
      marginTop: verticleScale(150),
    },
    extendImage: {
      height: verticleScale(350),
      width: '100%',
    },
    mainContainer: {
      flex: 1,
      backgroundColor: Color[theme]?.lightGray,
    },
    headerText: {
      color: Color[theme]?.offShade,
      fontSize: moderateScale(14),
      fontWeight: '400',
      marginLeft: horizontalScale(10),
    },
    textName: {
      color: Color[theme]?.palindromeColor,
      fontSize: moderateScale(20),
      fontWeight: '500',
      marginLeft: horizontalScale(10),
    },
    line: {
      borderBottomWidth: moderateScale(2),
      borderColor: Color[theme]?.offShade,
      marginTop: verticleScale(20),
    },
    description: {
      marginTop: verticleScale(150),
      padding: moderateScale(20),
    },
    spacingView: {
      marginTop: verticleScale(60),
    },
    followButton: {
      backgroundColor: Color[theme]?.button,
      marginTop: verticleScale(60),
      padding: moderateScale(10),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: moderateScale(10),
    },
    followingButton: {
      backgroundColor: Color[theme]?.green,
      marginTop: verticleScale(60),
      padding: moderateScale(10),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: moderateScale(10),
    },
    followText: {
      fontWeight: '500',
      color: Color[theme]?.palindromeColor,
      fontSize: moderateScale(15),
    },
  });

export default styling;
