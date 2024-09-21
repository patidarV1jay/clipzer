import { Bag, House, UserCircle, UserPlus } from 'phosphor-react-native';
import { FC } from 'react';
import { Text, View } from 'react-native';
import { ScreenStrings } from '../../constants';
import { useTheme } from '../../hooks';
import { Color, moderateScale } from '../../theme';
import styling from './CustomTabStyles';
interface Props {
  focused: boolean;
  iconName: string;
  label: string;
}
const CustomTab: FC<Props> = ({ focused, iconName, label }) => {
  const { themeValue } = useTheme();
  const styles = styling(themeValue);
  let Icon;
  switch (iconName) {
    case ScreenStrings.home:
      Icon = House;
      break;
    case ScreenStrings.add:
      Icon = UserPlus;
      break;
    case ScreenStrings.video:
      Icon = Bag;
      break;
    case ScreenStrings.profile:
      Icon = UserCircle;
      break;
    default:
      Icon = UserPlus;
  }

  return (
    <View style={styles.homeView}>
      <Icon
        color={
          focused
            ? Color[themeValue]?.cornFlowerBlue
            : Color[themeValue]?.ligthtSkyBlue
        }
        size={moderateScale(30)}
        weight={focused ? 'fill' : 'regular'}
      />
      <Text style={focused ? styles.textFocus : styles.textBlur}>{label}</Text>
    </View>
  );
};

export default CustomTab;
