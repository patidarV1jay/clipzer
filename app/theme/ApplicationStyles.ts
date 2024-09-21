import { StyleSheet } from 'react-native';
import { ColorType } from '../types';
import { Color } from './Color';
import { moderateScale, verticleScale } from './Metrics';

const applicationStyles = (theme: keyof ColorType) =>
  StyleSheet.create({
    commonStyles: {
      flex: 1,
    },
    drawerLabelStyle: {
      fontWeight: '500',
      fontSize: moderateScale(20),
      color: Color[theme]?.palindromeColor,
    },
    homeView: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: verticleScale(40),
    },
    tabBarStyles: {
      backgroundColor: Color[theme]?.commonWhite,
      position: 'absolute',
      height: verticleScale(170),
    },
    textFocus: {
      color: Color[theme]?.cornFlowerBlue,
      fontWeight: 'bold',
    },
    textBlur: {
      color: Color[theme]?.ligthtSkyBlue,
      fontWeight: '500',
    },
    drawerStyles: {
      width: '70%',
    },
  });

export default applicationStyles;
