import { FormikProps, useFormik } from 'formik';
import { useState } from 'react';
import { Alert, Linking } from 'react-native';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import { ProfileSchema } from '../../constants/ValidationSchema';
import { useKeyboard } from '../../hooks';
import { editUser, useAppDispatch, useAppSelector } from '../../redux';
import { ProfileTypes, users } from '../../types';
import { ScreenStrings } from './../../constants/Strings';

const useProfile = () => {
  const { users } = useAppSelector(state => state.signin);
  const { first_name, last_name, email, id, avatar }: Partial<users> = users;
  const [view, setView] = useState(false);
  const [imageView, setImageView] = useState(false);
  const dispatch = useAppDispatch();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { isKeyboardVisible } = useKeyboard();

  const editProfile = () => {
    setIsEdit(true);
  };
  const saveProfile = () => {
    setIsEdit(false);
  };
  const formik: FormikProps<ProfileTypes> = useFormik({
    validationSchema: ProfileSchema,
    initialValues: {
      first_name: first_name,
      last_name: last_name,
      email: email,
    },
    onSubmit: values => {
      dispatch(editUser({ ...values, id: id, avatar: avatar }));
      Alert.alert(ScreenStrings.alert);
      setIsEdit(false);
    },
  });
  const handleImage = () => {
    setView(true);
  };
  const openMail = async () => {
    try {
      await Linking.openURL(`mailto:${email}`);
    } catch (error) {
      return error;
    }
  };
  const launchLibrary = async () => {
    const option: ImageLibraryOptions = {
      mediaType: 'photo',
    };
    const response = await launchImageLibrary(option);
    if (response?.assets?.[0]?.fileSize) {
      dispatch(
        editUser({
          ...formik.values,
          id: users?.id,
          avatar: response?.assets?.[0].uri,
        }),
      );
      setView(false);
    } else {
      Alert.alert(ScreenStrings.error, ScreenStrings.errorMessage);
      setView(false);
    }
  };

  return {
    users,
    editProfile,
    isEdit,
    setIsEdit,
    saveProfile,
    formik,
    handleImage,
    setView,
    view,
    openMail,
    launchLibrary,
    imageView,
    setImageView,
    isKeyboardVisible,
  };
};

export default useProfile;
