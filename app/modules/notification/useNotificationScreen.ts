import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux';
import { clearNotificaton } from '../../redux/notification/NotificationSlice';

const useNotificationScreen = () => {
  const { notifications } = useAppSelector(
    state => state.notification,
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(clearNotificaton());
  }, []);
  return {
    notifications,
  };
};

export default useNotificationScreen;
