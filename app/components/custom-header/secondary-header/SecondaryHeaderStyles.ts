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
    container: {
      width: '100%',
      flexDirection: 'row',
      backgroundColor: Color[theme]?.header,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    listLogo: {
      flex: 1,
      backgroundColor: Color[theme]?.header,
      padding: moderateScale(2),
      borderRadius: moderateScale(10),
      marginLeft: horizontalScale(10),
    },
    arrowlogo: {
      marginRight: horizontalScale(7),
    },
    titleText: {
      color: Color[theme]?.palindromeColor,
      fontWeight: 'bold',
      fontSize: moderateScale(20),
    },
    textContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    flexOne: {
      flex: 1,
    },
    containerHeight:{
      height:verticleScale(100)
    },
    containerHeightIOS:{
      height:verticleScale(150),
    }
  });

export default styling;
