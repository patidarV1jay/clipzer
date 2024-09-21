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
      color: Color[theme]?.commonBlack,
    },
    signout: {
      position: 'absolute',
      width: '100%',
      bottom: verticleScale(40),
    },
    visibleContainer: {
      backgroundColor: Color[theme]?.commonWhite,
      padding: moderateScale(15),
      marginTop: verticleScale(15),
      alignItems: 'center',
      borderRadius: moderateScale(10),
    },
    contentSpacing: {
      justifyContent: 'space-between',
    },
    dropdownView: {
      backgroundColor: Color[theme]?.white,
      padding: moderateScale(15),
      marginTop: verticleScale(15),
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: moderateScale(10),
    },
    dropSelected: {
      backgroundColor: Color[theme]?.red,
      padding: moderateScale(15),
      marginTop: verticleScale(15),
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: moderateScale(10),
    },
    mainContainer: {
      flex: 1,
      backgroundColor: Color[theme]?.lightGray,
    },
    themeView: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    container: {
      flex: 1,
    },
    contentContainer: {
      flex: 1,
      alignItems: 'center',
    },
    radioButtonText: {
      fontSize: moderateScale(15),
      fontWeight: 'bold',
    },
    radioButton: {
      padding: moderateScale(10),
    },
    bottomSheet: {
      backgroundColor: Color[theme]?.themeColor,
    },
    themeContainer: {
      backgroundColor: Color[theme]?.theme,
      padding: moderateScale(15),
      marginTop: verticleScale(15),
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: moderateScale(10),
      margin: moderateScale(10),
      borderColor: Color[theme]?.commonBlack,
    },
    themeContainerSelected: {
      backgroundColor: Color[theme]?.red,
      padding: moderateScale(15),
      marginTop: verticleScale(15),
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: moderateScale(10),
      margin: moderateScale(10),
      borderColor: Color[theme]?.commonBlack,
    },
  });

export default styling;
