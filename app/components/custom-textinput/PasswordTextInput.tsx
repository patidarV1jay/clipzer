import { FC } from 'react';
import { TextInput } from 'react-native';
import { useTheme } from '../../hooks';
import { Color } from '../../theme';
import { PasswordProps } from './types';

export const CustomPasswordInput: FC<PasswordProps> = ({
  style,
  placeholder,
  formik,
  name,
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
    />
  );
};
