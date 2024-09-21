import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  CustomTab,
  MainHeader,
  SecondaryHeader,
  tabStyles,
} from '../components';
import { ScreenStrings } from '../constants';
import { useTheme } from '../hooks';
import { AddUser, HomeScreen, ProfileScreen, VideoScreen } from '../modules';
import { routesFocused, useAppDispatch } from '../redux';

const HomeTab = createBottomTabNavigator();
const TabNavigation = () => {
  const { themeValue } = useTheme();
  const styles = tabStyles(themeValue);
  const dispatch = useAppDispatch();

  return (
    <HomeTab.Navigator
      screenListeners={({ route }) => ({
        focus: () => dispatch(routesFocused(route.name)),
      })}
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          ...styles.tabBarStyles,
        },
        tabBarHideOnKeyboard: true
      }}>
      <HomeTab.Screen
        options={{
          header: () => <MainHeader />,
          tabBarIcon: ({ focused }) => (
            <CustomTab
              focused={focused}
              iconName={ScreenStrings.home}
              label={ScreenStrings.home}
            />
          ),
        }}
        name={ScreenStrings.home}
        component={HomeScreen}
      />
      <HomeTab.Screen
        options={{
          header: () => <SecondaryHeader title={ScreenStrings.addUser} />,
          tabBarIcon: ({ focused }) => (
            <CustomTab
              focused={focused}
              iconName={ScreenStrings.add}
              label={ScreenStrings.add}
            />
          ),
        }}
        name={ScreenStrings.add}
        component={AddUser}
      />
      <HomeTab.Screen
        options={{
          header: () => <SecondaryHeader title={ScreenStrings.video} />,
          tabBarIcon: ({ focused }) => (
            <CustomTab
              focused={focused}
              iconName={ScreenStrings.video}
              label={ScreenStrings.video}
            />
          ),
        }}
        name={ScreenStrings.video}
        component={VideoScreen}
      />
      <HomeTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <CustomTab
              focused={focused}
              iconName={ScreenStrings.profile}
              label={ScreenStrings.profile}
            />
          ),
        }}
        name={ScreenStrings.profile}
        component={ProfileScreen}
      />
    </HomeTab.Navigator>
  );
};

export default TabNavigation;
