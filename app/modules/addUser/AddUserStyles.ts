import { StyleSheet } from 'react-native';
import {
  Color,
  horizontalScale,
  moderateScale,
  verticleScale,
} from '../../theme';
import { ColorType } from './../../types/types';

const styling = (theme: keyof ColorType) =>
  StyleSheet.create({
    setImageView: {
      height: verticleScale(400),
      justifyContent: 'center',
      alignItems: 'center',
    },
    setImage: {
      height: verticleScale(400),
      width: horizontalScale(200),
      borderRadius: moderateScale(1000),
      alignSelf: 'center',
      marginTop: verticleScale(20),
    },
    logoView: {
      position: 'absolute',
      bottom: 0,
      right: horizontalScale(120),
    },
    input: {
      padding: moderateScale(12),
      borderRadius: moderateScale(10),
      color: Color[theme]?.palindromeColor,
      fontSize: moderateScale(16),
      fontWeight: 'bold',
      marginHorizontal: horizontalScale(10),
      marginTop: verticleScale(30),
      backgroundColor: Color[theme]?.white,
    },
    saveButton: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: verticleScale(50),
      padding: moderateScale(12),
      marginHorizontal: horizontalScale(10),
      borderRadius: moderateScale(10),
      backgroundColor: Color[theme]?.themeColor,
    },
    error: {
      color: Color[theme]?.red,
      marginLeft: horizontalScale(14),
    },
    textsave: {
      fontSize: moderateScale(18),
      fontWeight: 'bold',
      color: Color[theme]?.palindromeColor,
    },
    container: {
      flex: 1,
      backgroundColor: Color[theme]?.lightGray,
    },
    emptyView: {
      height: verticleScale(200),
    },
  });

export default styling;
