import { At, Password, Eye, EyeSlash } from 'phosphor-react-native';
import React, { FC } from 'react';
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Images } from '../../../assets';
import { CustomInput } from '../../../components';
import { PlaceholderStrings, ScreenStrings } from '../../../constants';
import { useTheme } from '../../../hooks';
import { Color, globalMetrics, moderateScale } from '../../../theme';
import styling from './SigninStyles';
import useSignin from './useSigninScreen';

const SigninScreen: FC = () => {
  const { formik, isloading, isKeyboardVisible, toggle, secureTextEntry } =
    useSignin();
  const { touched, errors, handleSubmit } = formik;
  const { themeValue } = useTheme();
  const styles = styling(themeValue);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={globalMetrics.isIos ? 'padding' : 'height'}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Image source={Images.signinImage} style={styles.signinImage} />
          <View style={styles.signinViewStyles}>
            <Text style={styles.signinText}>{ScreenStrings.signin}</Text>
            <View style={styles.textinput}>
              <At
                size={moderateScale(25)}
                weight="bold"
                color={Color[themeValue]?.palindromeColor}
              />
              <CustomInput
                style={styles.textinputField}
                placeholder={PlaceholderStrings.email}
                formik={formik}
                name="email"
              />
            </View>
            <View style={styles.errorView}>
              {errors['email'] && touched['email'] && (
                <Text style={styles.errorText}>{errors['email']}</Text>
              )}
            </View>
            <View style={styles.textinput}>
              <Password
                size={moderateScale(25)}
                weight="bold"
                color={Color[themeValue]?.palindromeColor}
              />
              <View style={styles.textinputField}>
                <CustomInput
                  style={styles.passwordInput}
                  placeholder={PlaceholderStrings.Password}
                  formik={formik}
                  name="password"
                  secureTextEntry={secureTextEntry}
                />

                <TouchableOpacity onPress={toggle}>
                  {secureTextEntry ? (
                    <Eye
                      size={moderateScale(22)}
                      weight="bold"
                      color={Color[themeValue]?.palindromeColor}
                    />
                  ) : (
                    <EyeSlash
                      size={moderateScale(22)}
                      weight="bold"
                      color={Color[themeValue]?.palindromeColor}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.errorView}>
              {errors['password'] && touched['password'] && (
                <Text style={styles.errorText}>{errors['password']}</Text>
              )}
            </View>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>
                {ScreenStrings.forgorPassword}
              </Text>
            </TouchableOpacity>
            {isloading ? (
              <View style={styles.loginButton}>
                <ActivityIndicator color={Color[themeValue]?.commonWhite} />
              </View>
            ) : (
              <TouchableOpacity
                onPress={handleSubmit as (event: HTMLElement) => void}
                style={styles.loginButton}>
                <Text style={styles.loginText}>{ScreenStrings.signin}</Text>
              </TouchableOpacity>
            )}
            <View style={styles.lineView}>
              <View style={styles.line} />
              <Text style={styles.textOr}>{ScreenStrings.or}</Text>
              <View style={styles.line} />
            </View>
            <TouchableOpacity style={styles.googleButton}>
              <Text style={styles.googleLoginText}>
                {ScreenStrings.googleSignin}
              </Text>
            </TouchableOpacity>
            <View style={styles.registerView}>
              <Text style={styles.registerText}>
                {ScreenStrings.newAccount}
                <Text style={styles.textRegister}>
                  {ScreenStrings.register}
                </Text>
              </Text>
            </View>
            {isKeyboardVisible ? <View style={styles.emptyView} /> : <></>}
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SigninScreen;
