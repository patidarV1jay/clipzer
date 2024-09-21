import { ScreenStrings } from './Strings';

export enum Themes {
  dark = 'dark',
  light = 'light',
  default = 'default',
}

export const data = [
  {
    label: ScreenStrings.light,
    value: Themes.light,
  },
  {
    label: ScreenStrings.dark,
    value: Themes.dark,
  },
  {
    label: ScreenStrings.default,
    value: Themes.default,
  },
];
