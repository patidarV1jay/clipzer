import { createContext } from 'react';
import { ThemeContextType } from '../types';
import { Themes } from '../constants';

export const ThemeContext = createContext<ThemeContextType>({
  themeValue: Themes.light || Themes.dark,
  setThemeValue: () => {},
  initialValue: 0,
  setInitialValue: () => {},
});
