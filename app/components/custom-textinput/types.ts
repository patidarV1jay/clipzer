import { FormikProps } from 'formik';
import { StyleProp, TextStyle } from 'react-native';
import { PasswordType, SigninValuesType } from '../../types';

export interface Props {
  style: StyleProp<TextStyle>;
  placeholder: string;
  formik: FormikProps<SigninValuesType>;
  name: string;
  secureTextEntry?: boolean,
}

export interface PasswordProps {
  style: StyleProp<TextStyle>;
  placeholder: string;
  formik: FormikProps<PasswordType>;
  name: string;
}
