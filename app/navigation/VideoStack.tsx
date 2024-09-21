import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingHeader, StackHeader } from '../components';
import { Routes, ScreenStrings } from '../constants';
import {
  NotificationScreen,
  SettingScreen,
  TermsAndCondition,
  UpdatePassword,
  UserDetails,
  VideoPlayer,
} from '../modules';

const StackVideo = createNativeStackNavigator();
const VideoStack = () => {
  return (
    <StackVideo.Navigator>
      <StackVideo.Screen
        options={{ header: () => <StackHeader title={ScreenStrings.video} /> }}
        name={Routes.VideoPlayer}
        component={VideoPlayer}
      />
      <StackVideo.Screen
        options={{
          header: () => <SettingHeader title={ScreenStrings.setting} />,
        }}
        name={Routes.Setting}
        component={SettingScreen}
      />
      <StackVideo.Screen
        options={{
          header: () => <StackHeader title={ScreenStrings.regulations} />,
        }}
        name={Routes.TnC}
        component={TermsAndCondition}
      />
      <StackVideo.Screen
        options={{
          header: () => <StackHeader title={ScreenStrings.updatePassword} />,
        }}
        name={Routes.ResetPassword}
        component={UpdatePassword}
      />
      <StackVideo.Screen
        options={{
          header: () => <StackHeader title={ScreenStrings.notification} />,
        }}
        name={Routes.NotificationScreen}
        component={NotificationScreen}
      />
      <StackVideo.Screen
        options={{
          header: () => <StackHeader title={ScreenStrings.details} />,
        }}
        name={Routes.UserDetails}
        component={UserDetails}
      />
    </StackVideo.Navigator>
  );
};

export default VideoStack;
