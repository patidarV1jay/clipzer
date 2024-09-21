import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { filterUsers, useAppDispatch, useAppSelector } from '../../../redux';
import { Routes } from '../../../constants';
import { Keyboard } from 'react-native';

const useMainHeader = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();
  const { notifications,unreadNotification } = useAppSelector(state => state.notification);
  
  const handleInput = () => {
    setSearchText('');
  };

  useEffect(() => {
    if (searchText?.length == 0) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [searchText]);

  useEffect(() => {
    dispatch(filterUsers(searchText));
  }, [searchText]);

  const navigateNotification = () => {
    navigation.navigate(Routes.Stack, {
      screen: Routes.NotificationScreen,
    });
  };
  
  const openDrawer = () =>{
    navigation.openDrawer()
    Keyboard.dismiss()
  }
  
  return {
    searchText,
    setSearchText,
    setVisible,
    visible,
    handleInput,
    navigation,
    navigateNotification,
    notifications,
    unreadNotification,
    openDrawer
  };
};

export default useMainHeader;
