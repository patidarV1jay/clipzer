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
      flex: 1,
      width: '70%',
      alignSelf: 'center',
      backgroundColor: Color[theme]?.themeColor,
      borderRadius: 10,
    },
    userImage: {
      height: verticleScale(300),
      width: horizontalScale(150),
      margin: horizontalScale(8),
      borderRadius: moderateScale(100),
      alignSelf: 'center',
      position: 'absolute',
    },
    nameText: {
      fontWeight: 'bold',
      fontSize: moderateScale(20),
      color: Color[theme]?.palindromeColor,
    },
    extraView: {
      height: verticleScale(150),
    },
    userDetailsView: {
      backgroundColor: Color[theme]?.themeColor,
      flex: 1,
      borderTopLeftRadius: moderateScale(20),
      borderTopWidth: moderateScale(4),
      borderLeftWidth: moderateScale(2),
      borderColor: Color[theme]?.mainImageColor,
      justifyContent: 'center',
      alignItems: 'center',
      padding: moderateScale(20),
      borderRadius: moderateScale(10),
    },
    imageView: {
      backgroundColor: Color[theme]?.mainImageColor,
      height: verticleScale(200),
      borderTopLeftRadius: moderateScale(10),
      borderTopRightRadius: moderateScale(10),
    },
    paddingList: {
      paddingBottom: verticleScale(180),
    },
    loaderView: {
      marginTop: verticleScale(10),
    },
    noDataImage: {
      height: verticleScale(700),
      width: horizontalScale(350),
    },
    emptyComponentView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: verticleScale(200),
    },
    listContainer: {
      backgroundColor: Color[theme]?.lightGray,
      flex: 1,
    },
  });

export default styling;
