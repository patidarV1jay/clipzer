import { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Routes } from '../../constants';
import { useTheme } from '../../hooks';
import styling from './SettingScreenStyles';
import { Props } from './types';
import useSettingScreen from './useSettingScreen';

const SettingCard: FC<Props> = ({ title, subtitle, icon }) => {
  const { themeValue } = useTheme();
  const styles = styling(themeValue);
  const { navigation } = useSettingScreen();

  return (
    <View style={styles.accountContainer}>
      {title && <Text style={styles.accountText}>{title}</Text>}
      <TouchableOpacity
        style={styles.changePasswordContainer}
        onPress={() =>
          navigation.navigate(Routes.Stack, { screen: Routes.TnC })
        }>
        {icon}
        <Text style={styles.changePasswordText}>{subtitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingCard;
