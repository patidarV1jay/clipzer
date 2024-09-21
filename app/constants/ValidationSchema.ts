import * as Yup from 'yup'
import { ValidationStrings } from './Strings'

export const SigninSchema = Yup.object().shape({
    email: Yup.string()
      .email(ValidationStrings.invalidemail)
      .required(ValidationStrings.required),
    password: Yup.string().required(ValidationStrings.required)
    .min(8,ValidationStrings.minLength),
  })

  export const ProfileSchema = Yup.object().shape({
    first_name: Yup.string().required(ValidationStrings.required),
    last_name: Yup.string().required(ValidationStrings.required),
    email: Yup.string()
      .email(ValidationStrings.invalidemail)
      .required(ValidationStrings.required),
  })

  export const PasswordSchema = Yup.object().shape({
    password: Yup.string().required(ValidationStrings.required)
    .min(8,ValidationStrings.minLength),
    confirmPassword : Yup.string().required(ValidationStrings.required)
    .oneOf([Yup.ref('password')],ValidationStrings.noMatch)
  })
