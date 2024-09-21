import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {
  CloudSun,
  Keyhole,
  Moon,
  MoonStars,
  Notebook,
  Shield,
  SignOut,
  Sun,
} from 'phosphor-react-native';
import { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ScreenStrings, Themes } from '../../constants';
import { ThemeContext, useTheme } from '../../hooks';
import { Color, moderateScale } from '../../theme';
import SettingCard from './SettingCard';
import styling from './SettingScreenStyles';
import useSettingScreen from './useSettingScreen';

const SettingScreen = () => {
  const {
    signout,
    snapPoints,
    handlePresentModalPress,
    handleSheetChanges,
    bottomSheetModalRef,
    isVisible,
    navigatePassword,
  } = useSettingScreen();
  const { themeValue, themeOperations } = useTheme();
  const { initialValue } = useContext(ThemeContext);
  const styles = styling(themeValue);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.accountContainer}>
        <Text style={styles.accountText}>{ScreenStrings.account}</Text>
        <TouchableOpacity
          style={styles.changePasswordContainer}
          onPress={navigatePassword}>
          <Shield
            size={moderateScale(25)}
            color={Color[themeValue]?.commonBlack}
            weight="bold"
          />
          <Text style={styles.changePasswordText}>
            {ScreenStrings.passwordChange}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.accountContainer}>
        <Text style={styles.accountText}>{ScreenStrings.theme}</Text>
        <TouchableOpacity
          style={[styles.changePasswordContainer, styles.contentSpacing]}
          onPress={handlePresentModalPress}>
          <View style={styles.themeView}>
            <CloudSun
              size={moderateScale(25)}
              color={Color[themeValue]?.commonBlack}
              weight="bold"
            />
            <Text style={styles.changePasswordText}>
              {ScreenStrings.changeTheme}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <SettingCard
        title={ScreenStrings.moreInfo}
        subtitle={ScreenStrings.policy}
        icon={
          <Keyhole
            size={moderateScale(25)}
            color={Color[themeValue]?.commonBlack}
            weight="bold"
          />
        }
      />
      <SettingCard
        subtitle={ScreenStrings.terms}
        icon={
          <Notebook
            size={moderateScale(25)}
            color={Color[themeValue]?.commonBlack}
            weight="bold"
          />
        }
      />
      <View style={styles.signout}>
        <View style={styles.accountContainer}>
          <TouchableOpacity
            style={styles.changePasswordContainer}
            onPress={signout}>
            <SignOut
              size={moderateScale(25)}
              color={Color[themeValue]?.commonBlack}
              weight="bold"
            />
            <Text style={styles.changePasswordText}>
              {ScreenStrings.signout}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {isVisible && (
        <GestureHandlerRootView style={styles.container}>
          <BottomSheetModalProvider>
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={1}
              snapPoints={snapPoints}
              onChange={handleSheetChanges}
              backgroundStyle={styles.bottomSheet}>
              <TouchableOpacity
                style={
                  initialValue === 1
                    ? styles.themeContainerSelected
                    : styles.themeContainer
                }
                onPress={() => themeOperations(Themes.light)}>
                <Sun
                  size={moderateScale(25)}
                  color={Color[themeValue]?.commonBlack}
                  weight="bold"
                />
                <Text style={styles.changePasswordText}>
                  {ScreenStrings.light}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  initialValue === 2
                    ? styles.themeContainerSelected
                    : styles.themeContainer
                }
                onPress={() => themeOperations(Themes.dark)}>
                <Moon
                  size={moderateScale(25)}
                  color={Color[themeValue]?.commonBlack}
                  weight="bold"
                />
                <Text style={styles.changePasswordText}>
                  {ScreenStrings.dark}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  initialValue === 3
                    ? styles.themeContainerSelected
                    : styles.themeContainer
                }
                onPress={() => themeOperations(Themes.default)}>
                <MoonStars
                  size={moderateScale(25)}
                  color={Color[themeValue]?.commonBlack}
                  weight="bold"
                />
                <Text style={styles.changePasswordText}>
                  {ScreenStrings.default}
                </Text>
              </TouchableOpacity>
            </BottomSheetModal>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      )}
    </View>
  );
};

export default SettingScreen;
