import { MutableRefObject, useRef } from 'react';
import { TextInput } from 'react-native';

const useInputRef = () => {
  const refEmail = useRef<TextInput | null>(null);
  const refFirstName = useRef<TextInput | null>(null);
  const refLastName = useRef<TextInput | null>(null);
  const refPassword = useRef<TextInput | null>(null);
  const refConfirmPassword = useRef<TextInput | null>(null);

  const focusNextTextInput = (nextRef: MutableRefObject<TextInput | null>) => {
    if (nextRef && nextRef.current) {
      nextRef.current.focus();
    }
  };

  return {
    refEmail,
    refFirstName,
    refLastName,
    focusNextTextInput,
    refPassword,
    refConfirmPassword,
  };
};

export default useInputRef;
