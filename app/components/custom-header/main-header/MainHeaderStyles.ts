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
    textInputView: {
      borderRadius: moderateScale(10),
      backgroundColor: Color[theme]?.themeColor,
      marginHorizontal: horizontalScale(10),
      marginTop: verticleScale(30),
      padding: moderateScale(10),
      flexDirection: 'row',
      fontSize: moderateScale(20),
      alignItems: 'center',
      marginBottom: verticleScale(10),
    },
    appName: {
      fontWeight: 'bold',
      fontSize: moderateScale(20),
    },
    mainView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: horizontalScale(5),
      paddingTop: verticleScale(5),
      paddingHorizontal: horizontalScale(5),
    },
    searchView: {
      flexDirection: 'row',
    },
    textInput: {
      fontSize: moderateScale(16),
      marginLeft: horizontalScale(10),
      fontWeight: '500',
      width: '75%',
      color: Color[theme]?.palindromeColor,
      padding:0
    },
    listLogo: {
      padding: moderateScale(2),
      borderRadius: moderateScale(10),
    },
    innerView: {
      flexDirection: 'row',
    },
    cancelView: {
      marginLeft: horizontalScale(30),
    },
    container: {
      backgroundColor: Color[theme]?.lightGray,
    },
    notificationsLength: {
      color: Color[theme]?.themeColor,
      marginTop: verticleScale(10),
      alignSelf: 'center',
      fontWeight: 'bold',
    },
    notificationContainer: {
      paddingBottom: moderateScale(2),
      backgroundColor: Color[theme]?.palindromeColor,
      position: 'absolute',
      right: horizontalScale(4),
      borderRadius: moderateScale(15),
      paddingHorizontal: horizontalScale(7),
      zIndex: 1,
    },
  });

export default styling;
