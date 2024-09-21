import { BottomSheetModal } from '@gorhom/bottom-sheet';
import {
  CommonActions,
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Routes } from '../../constants';
import { logOut, useAppDispatch } from '../../redux';
import { DrawerActions } from '@react-navigation/native';

const useSettingScreen = () => {
  const [isVisible, setisVisible] = useState<boolean>(false);
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const dispatch = useAppDispatch();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['25%', '80%'], []);

  const signout = () => {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{ name: Routes.Signin }],
    });
    navigation.dispatch(resetAction);
    dispatch(logOut());
  };

  const handlePresentModalPress = useCallback(() => {
    setisVisible(true);
    setTimeout(() => {
      bottomSheetModalRef.current?.present();
    }, 50);
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    setisVisible(index === 1 || index === 0);
  }, []);

  const navigatePassword = () => {
    navigation.navigate(Routes.Stack, { screen: Routes.ResetPassword });
  };

  useEffect(() => {
    navigation.dispatch(DrawerActions.closeDrawer());
  }, []);

  return {
    signout,
    snapPoints,
    handlePresentModalPress,
    handleSheetChanges,
    bottomSheetModalRef,
    isVisible,
    navigation,
    navigatePassword,
  };
};

export default useSettingScreen;
