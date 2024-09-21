/**
 * @format
 */
import messaging from '@react-native-firebase/messaging';
import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import { name as appName } from './app.json';
import App from './app/App';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  //it handles the background notification
});

AppRegistry.registerComponent(appName, () => App);
