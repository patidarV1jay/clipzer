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
    videoTag: {
      height: verticleScale(457),
    },
    controller: {
      position: 'absolute',
      height: verticleScale(457),
      width: '100%',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
    },
    slider: {
      position: 'absolute',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      flexDirection: 'row',
      borderLeftWidth: 1,
      bottom: 0,
      flex: 1,
      width: '100%',
    },
    timeView: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      position: 'absolute',
      width: '90%',
      alignSelf: 'flex-end',
    },
    textTime: {
      alignSelf: 'flex-end',
      color: Color[theme]?.commonWhite,
      fontWeight: 'bold',
    },
    textColor: {
      color: Color[theme]?.commonBlack,
      fontWeight: 'bold',
    },
    mainSlider: {
      height: verticleScale(40),
      width: '90%',
      alignSelf: 'flex-end',
    },
    volume: {
      position: 'absolute',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      top: 0,
    },
    textTitle: {
      color: Color[theme]?.palindromeColor,
      fontWeight: 'bold',
      fontSize: moderateScale(20),
    },
    thumbnail: {
      height: verticleScale(100),
      width: horizontalScale(50),
      borderRadius: moderateScale(1000),
    },
    description: {
      padding: moderateScale(5),
    },
    thumbContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: verticleScale(28),
    },
    thumbImage: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    subscribButton: {
      backgroundColor: Color[theme]?.ligthtSkyBlue,
      padding: moderateScale(10),
      borderRadius: moderateScale(10),
      paddingHorizontal: horizontalScale(15),
    },
    subscribeText: {
      fontWeight: '500',
      color: Color[theme]?.commonBlack,
    },
    textDescription: {
      fontSize: moderateScale(15),
      fontWeight: '500',
      color: Color[theme]?.palindromeColor,
      paddingTop: verticleScale(10),
    },
    screenAlign: { alignSelf: 'center' },
    subscriberView: {
      marginLeft: horizontalScale(8),
    },
    text: {
      fontWeight: 'bold',
      fontSize: moderateScale(15),
      color: Color[theme]?.palindromeColor,
    },
    likeButton: {
      flexDirection: 'row',
      backgroundColor: Color[theme]?.white,
      padding: moderateScale(8),
      borderRadius: moderateScale(20),
    },
    like: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: horizontalScale(10),
    },
    options: {
      marginVertical: verticleScale(20),
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    share: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    optionText: {
      fontWeight: '500',
      fontSize: moderateScale(13),
      color: Color[theme]?.palindromeColor,
    },
    commentView: {
      backgroundColor: Color[theme]?.white,
      padding: moderateScale(5),
      borderRadius: moderateScale(10),
      marginTop: verticleScale(20),
    },
    textComment: {
      fontWeight: 'bold',
      fontSize: moderateScale(16),
      marginBottom: verticleScale(20),
      color: Color[theme]?.palindromeColor,
    },
    commentImage: {
      height: verticleScale(80),
      width: horizontalScale(40),
      borderRadius: moderateScale(100),
      marginRight: horizontalScale(5),
    },
    comment: {
      justifyContent: 'center',
      flexDirection: 'row',
      width: '85%',
      marginLeft: verticleScale(40),
    },
    mainContainer: {
      flex: 1,
      backgroundColor: Color[theme]?.lightGray,
    },
  });

export default styling;
