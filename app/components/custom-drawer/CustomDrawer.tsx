import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
  CommonActions,
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { Gear, House, SignOut, User } from 'phosphor-react-native';
import React from 'react';
import { Image, ScrollView, ScrollViewProps, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Routes, ScreenStrings } from '../../constants';
import { useTheme } from '../../hooks';
import { logOut, useAppDispatch, useAppSelector } from '../../redux';
import { Color, appStyles, moderateScale } from '../../theme';
import styling from './CustomDrawerStyles';
import { routesFocused } from '../../redux';

const CustomDrawer = (
  props: React.JSX.IntrinsicAttributes &
    ScrollViewProps & {
      children: React.ReactNode;
    } & React.RefAttributes<ScrollView>,
) => {
  const { themeValue } = useTheme();
  const styles = styling(themeValue);
  const appStyle = appStyles(themeValue);
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const { users } = useAppSelector(state => state.signin);
  const dispatch = useAppDispatch();
  const signout = () => {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{ name: Routes.Signin }],
    });
    navigation.dispatch(resetAction);
    dispatch(logOut());
  };
  const { routes } = useAppSelector(state => state.notification);
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.drawerContainer}>
          <Image style={styles.imageAccount} source={{ uri: users?.avatar }} />
          <Text style={styles.user}>
            {users?.first_name} {users?.last_name}
          </Text>
          <Text style={styles.email}>{users?.email}</Text>
        </View>
      </SafeAreaView>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          focused = {routes == ScreenStrings.home}
          label={ScreenStrings.home}
          onPress={() => navigation.navigate(ScreenStrings.home)}
          icon={({ focused }) => (
            <House
              size={moderateScale(35)}
              color={Color[themeValue]?.palindromeColor}
            />
          )}
          labelStyle={appStyle.drawerLabelStyle}
        />
        <DrawerItem
          focused = {routes == ScreenStrings.profile}
          label={ScreenStrings.profile}
          onPress={() => navigation.navigate(ScreenStrings.profile)}
          icon={({ focused }) => (
            <>
              {focused ? (
                <View>
                  <User
                    size={moderateScale(35)}
                    color={Color[themeValue]?.palindromeColor}
                  />
                </View>
              ) : (
                <View>
                  <User
                    size={moderateScale(35)}
                    color={Color[themeValue]?.palindromeColor}
                  />
                </View>
              )}
            </>
          )}
          labelStyle={appStyle.drawerLabelStyle}
          
        />
        <DrawerItem
          label={ScreenStrings.setting}
          onPress={() =>
            navigation.navigate(Routes.Stack, { screen: Routes.Setting })
          }
          icon={({ focused }) => (
            <>
              {focused ? (
                <View>
                  <Gear
                    size={moderateScale(35)}
                    color={Color[themeValue]?.palindromeColor}
                  />
                </View>
              ) : (
                <View>
                  <Gear
                    size={moderateScale(35)}
                    color={Color[themeValue]?.palindromeColor}
                  />
                </View>
              )}
            </>
          )}
          labelStyle={appStyle.drawerLabelStyle}
        />
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <View style={styles.signout}>
          <TouchableOpacity style={styles.signout} onPress={signout}>
            <SignOut
              size={32}
              color={Color[themeValue]?.palindromeColor}
              weight="bold"
            />
            <Text style={styles.signoutText}>{ScreenStrings.signout}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textsignout}>{ScreenStrings.version}</Text>
      </View>
    </View>
  );
};

export default CustomDrawer;
