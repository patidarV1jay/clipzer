import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { ArrowLeft } from 'phosphor-react-native';
import { FC } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../../hooks';
import { Color, moderateScale } from '../../../theme';
import styling from '../stack-header/StackHeaderStyles';
import { Routes } from '../../../constants';
interface Props {
  title: string;
}
const SettingHeader: FC<Props> = ({ title }) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const { themeValue } = useTheme();
  const styles = styling(themeValue);
  const navigateHome = () => {
    navigation.navigate(Routes.Drawer, { screen: Routes.TabNavigation });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.listLogo} onPress={navigateHome}>
        <ArrowLeft
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

export default SettingHeader;
