import { Lock, LockOpen } from 'phosphor-react-native';
import { Text, TouchableOpacity, View } from 'react-native';
import { CustomPasswordInput } from '../../components';
import { PlaceholderStrings, ScreenStrings } from '../../constants';
import { useTheme } from '../../hooks';
import { Color, moderateScale } from '../../theme';
import styling from './UpdatePasswordStyles';
import useUpdatePassword from './useUpdatePassword';

const UpdatePassword = () => {
  const { themeValue } = useTheme();
  const { formik } = useUpdatePassword();
  const styles = styling(themeValue);
  return (
    <View style={styles.container}>
      <View style={styles.accountContainer}>
        <View style={[styles.changePasswordContainer, styles.inputText]}>
          <LockOpen
            size={moderateScale(22)}
            color={Color[themeValue]?.palindromeColor}
            weight="bold"
          />
          <CustomPasswordInput
            style={styles.input}
            formik={formik}
            name="password"
            placeholder={PlaceholderStrings.newPassword}
          />
        </View>
        {formik.errors.password && formik.touched.password && (
          <Text style={styles.errorText}>{formik.errors.password}</Text>
        )}
      </View>
      <View style={styles.accountContainer}>
        <View style={[styles.changePasswordContainer, styles.inputText]}>
          <Lock
            size={moderateScale(22)}
            color={Color[themeValue]?.palindromeColor}
            weight="bold"
          />
          <CustomPasswordInput
            style={styles.input}
            formik={formik}
            name="confirmPassword"
            placeholder={PlaceholderStrings.reenterPassword}
          />
        </View>
        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
          <Text style={styles.errorText}>{formik.errors.confirmPassword}</Text>
        )}
      </View>
      <View style={styles.accountContainer}>
        <TouchableOpacity
          onPress={formik.handleSubmit}
          style={[styles.changePasswordContainer, styles.update]}>
          <Text style={styles.updateText}>{ScreenStrings.updatePassword}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpdatePassword;
