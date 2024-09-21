import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/custom-drawer/CustomDrawer';
import { Routes } from '../constants';
import { useTheme } from '../hooks';
import { appStyles } from '../theme';
import TabNavigation from './TabNavigation';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  const { themeValue } = useTheme();
  const styles = appStyles(themeValue);

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: { ...styles.drawerStyles },
      }}
      drawerContent={props => <CustomDrawer children={undefined} {...props} />}>
      <Drawer.Screen name={Routes.TabNavigation} component={TabNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
