import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import { Routes } from '../constants';
import { navigationWithParam } from '../hooks';
import { saveNotification, store } from '../redux';

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    getFcmToken();
  }
};

export const getFcmToken = async () => {
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  if (!fcmToken) {
    try {
      const fcmToken = await messaging().getToken();
      console.log(fcmToken)
      await AsyncStorage.setItem('fcmToken', fcmToken);
    } catch (error) {
      return error;
    }
  }
};

export const notificationListener = async () => {
  console.log('asdfasdf')
  messaging().onNotificationOpenedApp(remoteMessage => {
    store.dispatch(saveNotification(remoteMessage));
  });

  messaging().onMessage(async remoteMessage => {
    store.dispatch(saveNotification(remoteMessage));
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        store.dispatch(saveNotification(remoteMessage));
        navigationWithParam(
          Routes.Stack,
          { screen: Routes.NotificationScreen },
          '',
        );
      }
    });
};
