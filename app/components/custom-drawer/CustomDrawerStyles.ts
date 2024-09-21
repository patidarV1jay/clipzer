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
    imageAccount: {
      height: verticleScale(200),
      width: horizontalScale(100),
      borderRadius: moderateScale(40),
      backgroundColor: Color[theme]?.commonWhite,
    },
    headerView: {
      backgroundColor: Color[theme]?.commonWhite,
      padding: moderateScale(10),
      alignItems: 'center',
    },
    greet: {
      fontSize: moderateScale(15),
      fontWeight: 'bold',
      color: Color[theme]?.commonBlack,
    },
    user: {
      fontWeight: 'bold',
      fontSize: moderateScale(20),
      color: Color[theme]?.palindromeColor,
    },
    email: {
      fontWeight: 'bold',
      color: Color[theme]?.text,
      fontSize: moderateScale(16),
    },
    signout: {
      flexDirection: 'row',
      alignItems: 'center',
      height: verticleScale(100),
      justifyContent: 'center',
      backgroundColor: Color[theme]?.themeColor,
      width: '100%',
      marginBottom: verticleScale(5),
      borderRadius: moderateScale(10),
    },
    textsignout: {
      fontWeight: '500',
      fontSize: moderateScale(15),
      marginLeft: horizontalScale(5),
      color:Color[theme]?.text,
    },
    container: {
      flex: 1,
      backgroundColor: Color[theme]?.lightGray,
    },
    iconSignOut: {
      marginLeft: verticleScale(100),
    },
    safeAreaView: {
      backgroundColor: Color[theme]?.themeColor,
    },
    drawerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: verticleScale(20),
    },
    footer: {
      alignItems: 'center',
      height: verticleScale(200),
      justifyContent: 'center',
    },
    signoutText: {
      color: Color[theme]?.palindromeColor,
      fontWeight: '600',
      fontSize: moderateScale(20),
      marginLeft: horizontalScale(5),
    },
  });

export default styling;
