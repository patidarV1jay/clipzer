import { FC } from 'react';
import { TextInput } from 'react-native';
import { useTheme } from '../../hooks';
import { Color } from '../../theme';
import { Props } from './types';

export const CustomInput: FC<Props> = ({
  style,
  placeholder,
  formik,
  name,
  secureTextEntry,
}) => {
  const { themeValue } = useTheme();
  const { handleChange, handleBlur, values } = formik;

  return (
    <TextInput
      style={style}
      placeholder={placeholder}
      autoCapitalize="none"
      onChangeText={handleChange(name)}
      onBlur={handleBlur(name)}
      value={values['name']}
      autoCorrect={false}
      placeholderTextColor={Color[themeValue]?.offShade}
      secureTextEntry={secureTextEntry}
    />
  );
};
