import { StyleSheet } from 'react-native';
import { Color, verticleScale } from '../../theme';
import { ColorType } from '../../types';

const styling = (theme: keyof ColorType) =>
  StyleSheet.create({
    homeView: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: verticleScale(40),
    },
    tabBarStyles: {
      backgroundColor: Color[theme]?.themeColor,
      position: 'absolute',
      height: verticleScale(130),
    },
    textFocus: {
      color: Color[theme]?.cornFlowerBlue,
      fontWeight: 'bold',
    },
    textBlur: {
      color: Color[theme]?.ligthtSkyBlue,
      fontWeight: '500',
    },
  });

export default styling;
