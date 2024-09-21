import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../constants';
import { SigninScreen } from '../modules';
import { useAppSelector } from '../redux';
import DrawerNavigation from './DrawerNavigation';
import VideoStack from './VideoStack';

const MainStack = createNativeStackNavigator();
const RootStack = () => {
  const { isSuccess } = useAppSelector(state => state.signin);
  return (
    <MainStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={isSuccess ? 'Drawer' : Routes.Signin}>
      <MainStack.Screen
        options={{ headerShown: false }}
        name={Routes.Signin}
        component={SigninScreen}
      />
      <MainStack.Screen name={Routes.Drawer} component={DrawerNavigation} />
      <MainStack.Screen name={Routes.Stack} component={VideoStack} />
    </MainStack.Navigator>
  );
};

export default RootStack;
