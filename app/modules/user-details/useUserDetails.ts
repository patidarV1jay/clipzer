import { useRoute } from '@react-navigation/native';
import { followUser, useAppDispatch, useAppSelector } from '../../redux';
import { RouteType } from './types';
import { useState } from 'react';

const useUserDetails = () => {
  const [following, setFollow] = useState(false);
  const { followList, isFollow } = useAppSelector(state => state.homeScreen);
  const dispatch = useAppDispatch();
  const route = useRoute<RouteType>();
  const item = route?.params;

  const follow = () => {
    setFollow(!following);
    dispatch(followUser({ ...item, following }));
  };
  return {
    item,
    follow,
    isFollow,
  };
};

export default useUserDetails;
