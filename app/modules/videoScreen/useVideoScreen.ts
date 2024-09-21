import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { useEffect } from 'react';
import { Routes } from '../../constants';
import { fetchVideo, item, useAppDispatch, useAppSelector } from '../../redux';

const useVideoScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const { videos, isloading } = useAppSelector(state => state.videoScreen);
  useEffect(() => {
    dispatch(fetchVideo());
  }, []);

  const navigateToPlayer = (item: item) => {
    navigation.navigate(Routes.Stack, {
      screen: Routes.VideoPlayer,
      params: { source: item },
    });
  };

  return {
    videos,
    navigateToPlayer,
    isloading,
  };
};

export default useVideoScreen;
