import { NavigationContainer } from '@react-navigation/native';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, useColorScheme } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ScreenStrings, Themes } from './constants';
import { ThemeContext, navigationRef } from './hooks';
import { RootStack } from './navigation';
import { persistor, store } from './redux';
import { ColorType } from './types';
import {
  get,
  notificationListener,
  requestUserPermission,
  save,
} from './utils';

const App: FC = () => {
  const [themeValue, setThemeValue] = useState<keyof ColorType>(Themes.light);
  const [initialValue, setInitialValue] = useState(0);
  const appearance = useColorScheme();

  const setAppTheme = useCallback(async () => {
    const isFirst = await get(ScreenStrings.new);
    if (isFirst === null) {
      save(ScreenStrings.theme, appearance || '');
      save(ScreenStrings.isdefault, true);
      save(ScreenStrings.new, true);
    }
  }, []);

  useEffect(() => {
    SplashScreen.hide();
    requestUserPermission();
    notificationListener();
  }, []);

  useEffect(() => {
    setAppTheme();
  }, [setAppTheme]);

  return (
    <NavigationContainer ref={navigationRef}>
      <ThemeContext.Provider
        value={{ themeValue, setThemeValue, initialValue, setInitialValue }}>
        <Provider store={store}>
          <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
            <RootStack />
          </PersistGate>
        </Provider>
      </ThemeContext.Provider>
    </NavigationContainer>
  );
};

export default App;
