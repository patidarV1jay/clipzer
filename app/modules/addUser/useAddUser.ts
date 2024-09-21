import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Alert } from 'react-native';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import { Images } from '../../assets';
import { ProfileSchema, ScreenStrings } from '../../constants';
import { useKeyboard } from '../../hooks';
import { addUser, useAppDispatch } from '../../redux';

const useAddUser = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const [image, setImage] = useState<string | undefined>(Images.user);
  const { isKeyboardVisible } = useKeyboard();
  const number = Math.floor(Math.random() * 100);

  const launchLibrary = async () => {
    const option: ImageLibraryOptions = {
      mediaType: 'photo',
    };
    const response = await launchImageLibrary(option);
    if (response?.assets?.[0]?.fileSize) setImage(response?.assets?.[0].uri);
    else {
      Alert.alert(ScreenStrings.error, ScreenStrings.errorMessage);
    }
  };

  const formik = useFormik({
    validationSchema: ProfileSchema,
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
    },
    onSubmit(values, { resetForm }) {
      if (image == Images.user || undefined) {
        Alert.alert(
          ScreenStrings.hold,
          ScreenStrings.noProfile,
          [
            {
              text: ScreenStrings.addProfile,
              onPress: () => launchLibrary(),
              style: 'cancel',
            },
            {
              text: ScreenStrings.skip,
              onPress: () => {
                dispatch(addUser({ id: number, avatar: image, ...values }));
                Alert.alert(ScreenStrings.userAdded, '', [
                  {
                    text: ScreenStrings.ok,
                    onPress: () => navigation.navigate(ScreenStrings.home),
                  },
                ]);
                resetForm();
              },
            },
          ],
          { cancelable: false },
        );
      } else {
        dispatch(addUser({ id: Date.now(), avatar: image, ...values }));
        Alert.alert(ScreenStrings.userAdded, '', [
          {
            text: ScreenStrings.ok,
            onPress: () => navigation.navigate(ScreenStrings.home),
          },
        ]);
        resetForm();
        setImage(Images.user);
      }
    },
  });

  return {
    formik,
    launchLibrary,
    image,
    isKeyboardVisible,
  };
};

export default useAddUser;
