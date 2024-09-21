import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'phosphor-react-native';
import { FC } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../../hooks';
import { Color, moderateScale } from '../../../theme';
import styling from './StackHeaderStyles';
interface Props {
  title: string;
}
const StackHeader: FC<Props> = ({ title }) => {
  const navigation = useNavigation();
  const { themeValue } = useTheme();
  const styles = styling(themeValue)
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.listLogo} onPress={navigation.goBack}>
        <ArrowLeft size={moderateScale(32)} color={Color[themeValue]?.palindromeColor} weight="bold" />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.flexOne} />
    </SafeAreaView>
  );
};

export default StackHeader;
