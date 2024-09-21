import { PlusCircle } from 'phosphor-react-native';
import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScreenStrings } from '../../constants';
import { useInputRef, useTheme } from '../../hooks';
import { Color, globalMetrics, moderateScale } from '../../theme';
import styling from './AddUserStyles';
import useAddUser from './useAddUser';

const AddUser = () => {
  const { formik, launchLibrary, image, isKeyboardVisible } = useAddUser();
  const { refEmail, refFirstName, refLastName, focusNextTextInput } =
    useInputRef();
  const { themeValue } = useTheme();
  const styles = styling(themeValue);

  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={globalMetrics.isIos ? 'padding' : 'height'}>
        <TouchableOpacity style={styles.setImageView} onPress={launchLibrary}>
          <Image source={{ uri: image }} style={styles.setImage} />
          <View style={styles.logoView}>
            <PlusCircle
              size={moderateScale(32)}
              color={Color[themeValue]?.palindromeColor}
              weight="bold"
            />
          </View>
        </TouchableOpacity>
        <TextInput
          ref={refEmail}
          onSubmitEditing={() => focusNextTextInput(refFirstName)}
          style={styles.input}
          placeholder={ScreenStrings.firstname}
          value={formik.values.first_name}
          onChangeText={formik.handleChange('first_name')}
          onBlur={formik.handleBlur('first_name')}
          autoFocus={true}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          placeholderTextColor={Color[themeValue]?.offShade}
        />
        {formik.errors.first_name && formik.touched.first_name && (
          <Text style={styles.error}>{formik.errors.first_name}</Text>
        )}
        <TextInput
          ref={refFirstName}
          onSubmitEditing={() => focusNextTextInput(refLastName)}
          style={styles.input}
          placeholder={ScreenStrings.lastname}
          value={formik.values.last_name}
          onChangeText={formik.handleChange('last_name')}
          onBlur={formik.handleBlur('last_name')}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          placeholderTextColor={Color[themeValue]?.offShade}
        />
        {formik.errors.last_name && formik.touched.last_name && (
          <Text style={styles.error}>{formik.errors.last_name}</Text>
        )}
        <TextInput
          ref={refLastName}
          onSubmitEditing={formik.handleSubmit as (event: HTMLElement) => void}
          style={styles.input}
          placeholder={ScreenStrings.mail}
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="done"
          placeholderTextColor={Color[themeValue]?.offShade}
        />
        {formik.errors.email && formik.touched.email && (
          <Text style={styles.error}>{formik.errors.email}</Text>
        )}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={formik.handleSubmit as (event: HTMLElement) => void}>
          <Text style={styles.textsave}>{ScreenStrings.register}</Text>
        </TouchableOpacity>
        {isKeyboardVisible ? <View style={styles.emptyView} /> : <></>}
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default AddUser;
