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
    userImageView: {
      width: horizontalScale(170),
      height: verticleScale(300),
      alignSelf: 'center',
      borderRadius: moderateScale(10),
    },
    userImage: {
      width: horizontalScale(170),
      height: verticleScale(340),
      alignSelf: 'center',
      borderRadius: moderateScale(10),
      bottom: verticleScale(50),
    },
    mainView: {
      flex: 1,
      position: 'relative',
    },
    imageView: {
      position: 'relative',
    },
    safeAreaView: {
      backgroundColor: Color[theme]?.mainImageColor,
      height: verticleScale(300),
    },
    textName: {
      color: Color[theme]?.palindromeColor,
      fontSize: moderateScale(20),
      marginTop: verticleScale(10),
      fontWeight: '600',
      paddingBottom: verticleScale(5),
    },
    lineview: {
      borderBottomWidth: moderateScale(2),
      borderColor: Color[theme]?.offShade,
      marginHorizontal: moderateScale(20),
      marginVertical: verticleScale(35),
    },
    nameText: {
      color: Color[theme]?.offShade,
      fontSize: moderateScale(16),
      fontWeight: '500',
    },
    button: {
      backgroundColor: Color[theme]?.mainImageColor,
      marginHorizontal: moderateScale(20),
      padding: moderateScale(10),
      borderRadius: moderateScale(10),
      marginTop: verticleScale(40),
    },
    editText: {
      color: Color[theme]?.commonBlack,
      fontWeight: 'bold',
      fontSize: moderateScale(18),
      alignSelf: 'center',
    },
    errorView: {
      marginLeft: verticleScale(50),
    },
    errorText: {
      color: Color[theme]?.red,
    },
    modalImage: {
      height: verticleScale(600),
      width: horizontalScale(300),
      borderRadius: moderateScale(100),
      alignSelf: 'center',
    },
    modalMainView: {
      flex: 1,
      backgroundColor: Color[theme]?.opaque,
    },
    container: {
      backgroundColor: Color[theme]?.mainImageColor,
      flex: 1,
    },
    innerView: {
      backgroundColor: Color[theme]?.lightGray,
      flex: 1,
      marginTop: verticleScale(20),
      borderTopRightRadius: moderateScale(40),
      borderTopLeftRadius: moderateScale(40),
    },
    updateView: {
      marginTop: verticleScale(50),
    },
    innerModalView: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      position: 'relative',
    },
    modalButton: {
      backgroundColor: Color[theme]?.button,
      margin: moderateScale(10),
      width: '80%',
      padding: moderateScale(5),
      borderRadius: moderateScale(10),
      height: verticleScale(80),
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Color[theme]?.modal,
      height: '28%',
      borderRadius: moderateScale(20),
    },
    modalFlex: {
      flex: 1,
    },
    mainModal: {
      height: '100%',
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
    extraView: {
      flex: 0.4,
      backgroundColor: Color[theme]?.opaque,
    },
    modalInnerView: {
      height: verticleScale(500),
      width: horizontalScale(250),
      alignSelf: 'center',
      borderRadius: moderateScale(10),
    },
    textButton: {
      color: Color[theme]?.commonWhite,
      fontWeight: '500',
      fontSize: moderateScale(15),
    },
    modalCloseView: {
      flex: 0.3,
      backgroundColor: Color[theme]?.opaque,
    },
    emptyView: {
      height: verticleScale(280),
    },
  });

export default styling;
