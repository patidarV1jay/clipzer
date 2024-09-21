import { useCallback, useContext, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { ScreenStrings, Themes } from '../constants';
import { ColorType } from '../types';
import { get, save } from '../utils';
import { ThemeContext } from './useThemeContext';

const useTheme = () => {
  const themes = useColorScheme();
  const { themeValue, setThemeValue, initialValue, setInitialValue } =
    useContext(ThemeContext);

  const themeOperations = (theme: keyof ColorType) => {
    switch (theme) {
      case Themes.dark:
        setTheme(theme, false);
        setInitialValue(2);
        return;
      case Themes.light:
        setTheme(theme, false);
        setInitialValue(1);
        return;
      case Themes.default:
        setTheme(themes || Themes.light, true);
        setInitialValue(3);
        return;
    }
  };

  const getAppTheme = useCallback(async () => {
    const theme = await get(ScreenStrings.theme);
    const isDefault = await get(ScreenStrings.isdefault);
    isDefault ? themeOperations(Themes.default) : themeOperations(theme);
  }, []);

  const setTheme = useCallback(
    async (theme: keyof ColorType, isDefault: boolean) => {
      save(ScreenStrings.theme, theme);
      save(ScreenStrings.isdefault, isDefault);
      setThemeValue(theme);
    },
    [],
  );

  useEffect(() => {
    getAppTheme();
  }, [getAppTheme]);

  return {
    themeOperations,
    themeValue,
  };
};

export default useTheme;
