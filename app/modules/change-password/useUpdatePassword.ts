import { FormikProps, useFormik } from 'formik';
import { PasswordSchema } from '../../constants';
import { logIn, useAppDispatch } from '../../redux';
import { PasswordType } from '../../types';
import { Alert } from 'react-native';
import { ScreenStrings } from '../../constants';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

const useUpdatePassword = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  const formik: FormikProps<PasswordType> = useFormik<PasswordType>({
    validationSchema: PasswordSchema,
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    onSubmit: ({ password }, { resetForm }) => {
      dispatch(logIn({ password }));
      Alert.alert(ScreenStrings.passwordUpdated)
      navigation.goBack()
    },
  });

  return {
    formik,
  };
};

export default useUpdatePassword;
