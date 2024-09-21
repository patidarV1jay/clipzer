import { Dimensions, StyleSheet } from 'react-native';
import {
  Color,
  horizontalScale,
  moderateScale,
  verticleScale
} from '../../theme';
import { ColorType } from '../../types';

const height = Dimensions.get('window').height / 3 - 70;
const styling = (theme: keyof ColorType) =>
  StyleSheet.create({
    thumbnail: {
      width: '100%',
      height: height,
      borderWidth: moderateScale(2),
    },
    roundImage: {
      borderRadius: moderateScale(1000),
      height: verticleScale(110),
      width: horizontalScale(55),
    },
    description: {
      flexDirection: 'row',
      padding: moderateScale(5),
      marginBottom: verticleScale(15),
    },
    textTitle: {
      fontWeight: 'bold',
      fontSize: moderateScale(16),
      color: Color[theme]?.palindromeColor,
    },
    textSubtitle: {
      fontWeight: 'bold',
      color: Color[theme]?.text,
    },
    textView: {
      marginLeft: horizontalScale(8),
      marginTop: verticleScale(8),
    },
    container: {
      flex: 1,
      backgroundColor: Color[theme]?.lightGray,
    },
  });

export default styling;
