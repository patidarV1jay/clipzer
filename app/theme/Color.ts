// Setting up the theme change so the new color file is created. It wiil be removed once theme change setup is done
import { ColorType } from '../types';

const commonColor = {
  commonWhite: '#FFFFFF',
  commonBlack: '#000000',
  activeColor: '#DE5E69',
  deactiveColor: '#DE5E6950',
  boxActiveColor: '#DE5E6940',
  red: '#FF0000',
  ligthtSkyBlue: '#CBE2FE',
  opaque: '#BFB4BB80',
  text: '#808080',
  blue: '#0865FF',
  offWhite: '#F5F6F7',
  cornFlowerBlue: '#6495ED',
  green: '#108505',
};

export const Color: ColorType = {
  light: {
    themeColor: '#FFFFFF',
    white: '#FFFFFF',
    sky: '#DE5E69',
    gray: '#808080',
    lightGray: '#F5F6F7',
    boxTopColor: '#FFFFFF',
    palindromeColor: '#000000',
    mainImageColor: '#CBE2FE',
    ...commonColor,
    offShade: '#AEB1B5',
    header: '#FFFFFF',
    modal: '#CBE2FE',
    button: '#6495ED',
    loginColor: '#CBE2FE',
    theme: '#F5F6F7',
  },
  dark: {
    themeColor: '#000000',
    white: '#808080',
    sky: '#831a23',
    gray: '#FFFFFF',
    lightGray: '#222426',
    palindromeColor: '#FFFFFF',
    mainImageColor: '#808080',
    ...commonColor,
    offShade: '#C2C4C6',
    header: '#222426',
    modal: '#000000',
    button: '#808080',
    loginColor: '#000000',
    theme: '#808080',
  },
};
