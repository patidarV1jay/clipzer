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
      flex: 1,
      backgroundColor: Color[theme]?.lightGray,
    },
    notificationContainer: {
      backgroundColor: Color[theme]?.white,
      padding: moderateScale(8),
      marginTop: verticleScale(15),
      borderRadius: moderateScale(10),
      marginHorizontal: horizontalScale(10),
      paddingLeft: horizontalScale(10),
    },
    textTitle: {
      fontWeight: 'bold',
      color: Color[theme]?.offShade,
      fontSize: moderateScale(12),
    },
    textBody: {
      fontWeight: 'bold',
      color: Color[theme]?.commonBlack,
      fontSize: moderateScale(16),
    },
    imageNoNotification: {
      height: verticleScale(700),
      width: horizontalScale(350),
      flex: 1,
    },
    emptyView: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    textHeader: {
      color: Color[theme]?.cornFlowerBlue,
      fontWeight: 'bold',
      fontSize: moderateScale(20),
    },
    textFooter: {
      color: Color[theme]?.palindromeColor,
      fontSize: moderateScale(16),
      marginTop: verticleScale(5),
    },
  });

export default styling;
