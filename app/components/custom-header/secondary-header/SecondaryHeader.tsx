import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { List } from 'phosphor-react-native';
import { FC } from 'react';
import {
  Keyboard,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from '../../../hooks';
import { Color, globalMetrics, moderateScale } from '../../../theme';
import styling from './SecondaryHeaderStyles';
interface Props {
  title: string;
}
const MainHeader: FC<Props> = ({ title }) => {
  const { themeValue } = useTheme();
  const styles = styling(themeValue);
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();
  const openDrawer = () => {
    navigation.openDrawer();
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={globalMetrics.isIos ? [styles.container, styles.containerHeightIOS] : [styles.container, styles.containerHeight]}>
      <TouchableOpacity style={styles.listLogo} onPress={openDrawer}>
        <List
          size={moderateScale(32)}
          color={Color[themeValue]?.palindromeColor}
          weight="bold"
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.flexOne} />
    </SafeAreaView>
  );
};

export default MainHeader;
