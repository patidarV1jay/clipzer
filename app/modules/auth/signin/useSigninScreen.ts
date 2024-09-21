import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { FormikProps, useFormik } from 'formik';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import { Routes, ScreenStrings, SigninSchema } from '../../../constants';
import { useKeyboard } from '../../../hooks';
import { authUser, resetError } from '../../../redux';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { SigninValuesType } from './types';
import { useState } from 'react';

const useSignin = () => {
  const [secureTextEntry,setSecureTextEntry] = useState<boolean>(true)
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { isloading, error, isSuccess, usersList } = useAppSelector(
    state => state.signin,
  );
  const { isKeyboardVisible } = useKeyboard();
  
  useEffect(() => {
    isSuccess && navigation.replace(Routes.Drawer);
  }, [isSuccess]);

  if (error && isloading == false) {
    Alert.alert(ScreenStrings.failed, ScreenStrings.failureDetail, [
      {
        text: ScreenStrings.ok,
        onPress: () => dispatch(resetError()),
        style: 'cancel',
      },
    ]);
  }

  const formik: FormikProps<SigninValuesType> = useFormik<SigninValuesType>({
    validationSchema: SigninSchema,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values: SigninValuesType) => {
      if (usersList?.[values.email]) {
        if (usersList?.[values.email] === values.password) {
          dispatch(authUser(values));
        } else {
          Alert.alert(ScreenStrings.incorrectPassword);
        }
      } else {
        dispatch(authUser(values));
      }
    },
  });
  
  const toggle = () =>{
    setSecureTextEntry(!secureTextEntry)
  }

  return {
    formik,
    isloading,
    isKeyboardVisible,
    toggle,
    secureTextEntry
  };
};

export default useSignin;
