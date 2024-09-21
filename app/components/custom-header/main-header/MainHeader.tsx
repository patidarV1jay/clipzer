import {
  BellRinging,
  List,
  MagnifyingGlass,
  XCircle,
} from 'phosphor-react-native';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { PlaceholderStrings } from '../../../constants';
import { useTheme } from '../../../hooks';
import { Color, globalMetrics, moderateScale } from '../../../theme';
import styling from './MainHeaderStyles';
import useMainHeader from './userMainHeader';

const MainHeader = () => {
  const {
    searchText,
    setSearchText,
    visible,
    handleInput,
    navigation,
    navigateNotification,
    unreadNotification,
    openDrawer
  } = useMainHeader();
  const { themeValue } = useTheme();
  const styles = styling(themeValue);

  return (
    <SafeAreaView style={styles.container}>
      {globalMetrics.isAndroid && unreadNotification.length != 0 && (
        <View style={styles.notificationContainer}>
          <Text style={styles.notificationsLength}>
            {unreadNotification?.length}
          </Text>
        </View>
      )}
      <View style={styles.mainView}>
        <View style={styles.innerView}>
          <View style={styles.listLogo}>
            <TouchableOpacity onPress={openDrawer}>
              <List
                size={moderateScale(32)}
                color={Color[themeValue]?.palindromeColor}
                weight="bold"
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.listLogo}
          onPress={navigateNotification}>
          <BellRinging
            size={moderateScale(32)}
            color={Color[themeValue]?.palindromeColor}
            weight="bold"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.textInputView}>
        <View style={styles.listLogo}>
          <MagnifyingGlass
            size={moderateScale(22)}
            color={Color[themeValue]?.palindromeColor}
            weight="bold"
          />
        </View>
        <TextInput
          style={styles.textInput}
          placeholder={PlaceholderStrings.search}
          value={searchText}
          onChangeText={text => setSearchText(text)}
          autoCapitalize="none"
          placeholderTextColor={Color[themeValue]?.offShade}
        />
        {visible ? (
          <TouchableOpacity style={styles.cancelView} onPress={handleInput}>
            <XCircle
              size={moderateScale(25)}
              color={Color[themeValue]?.ligthtSkyBlue}
              weight="bold"
            />
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
    </SafeAreaView>
  );
};

export default MainHeader;
