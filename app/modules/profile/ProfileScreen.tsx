import {
  Image,
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenStrings } from '../../constants';
import { useInputRef, useTheme } from '../../hooks';
import { globalMetrics } from '../../theme';
import styling from './ProfileStyles';
import useProfile from './useProfile';

const ProfileScreen = () => {
  const {
    users,
    editProfile,
    isEdit,
    formik,
    view,
    setView,
    openMail,
    launchLibrary,
    imageView,
    setImageView,
    isKeyboardVisible,
  } = useProfile();
  const { refEmail, refFirstName, refLastName, focusNextTextInput } =
    useInputRef();
  const { values, handleChange, touched, errors, handleSubmit } = formik;
  const { themeValue } = useTheme();
  const styles = styling(themeValue);

  return (
    <>
      <KeyboardAvoidingView
        behavior={globalMetrics.isIos ? 'padding' : 'height'}
        style={styles.container}>
        <SafeAreaView style={styles.safeAreaView} />

        <View style={styles.innerView}>
          {isEdit ? (
            <TouchableOpacity
              onPress={() => setView(true)}
              style={styles.userImageView}>
              <Image source={{ uri: users?.avatar }} style={styles.userImage} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setImageView(true)}
              style={styles.userImageView}>
              <Image source={{ uri: users?.avatar }} style={styles.userImage} />
            </TouchableOpacity>
          )}
          {!isEdit ? (
            <View style={styles.updateView}>
              <View style={styles.lineview}>
                <Text style={styles.nameText}>{ScreenStrings.firstname}</Text>
                <Text style={styles.textName}>{users?.first_name}</Text>
              </View>
              <View style={styles.lineview}>
                <Text style={styles.nameText}>{ScreenStrings.lastname}</Text>
                <Text style={styles.textName}>{users?.last_name}</Text>
              </View>
              <View style={styles.lineview}>
                <Text style={styles.nameText}>{ScreenStrings.mail}</Text>
                <Text style={styles.textName} onPress={openMail}>
                  {users?.email}
                </Text>
              </View>
              <TouchableOpacity onPress={editProfile} style={styles.button}>
                <Text style={styles.editText}>{ScreenStrings.edit}</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <ScrollView style={styles.updateView}>
              <View style={styles.lineview}>
                <Text style={styles.nameText}>{ScreenStrings.firstname}</Text>
                <TextInput
                  ref={refEmail}
                  onSubmitEditing={() => focusNextTextInput(refFirstName)}
                  value={values.first_name}
                  style={styles.textName}
                  onChangeText={handleChange('first_name')}
                  autoFocus
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="default"
                  returnKeyType="next"
                />
              </View>
              <View style={styles.errorView}>
                {errors['first_name'] && touched['first_name'] && (
                  <Text style={styles.errorText}>{errors['first_name']}</Text>
                )}
              </View>
              <View style={styles.lineview}>
                <Text style={styles.nameText}>{ScreenStrings.lastname}</Text>
                <TextInput
                  ref={refFirstName}
                  onSubmitEditing={() => focusNextTextInput(refLastName)}
                  value={values.last_name}
                  style={styles.textName}
                  onChangeText={handleChange('last_name')}
                  autoCorrect={false}
                  autoCapitalize="none"
                  returnKeyType="next"
                />
              </View>
              <View style={styles.errorView}>
                {errors['last_name'] && touched['last_name'] && (
                  <Text style={styles.errorText}>{errors['last_name']}</Text>
                )}
              </View>
              <View style={styles.lineview}>
                <Text style={styles.nameText}>{ScreenStrings.mail}</Text>
                <TextInput
                  ref={refLastName}
                  style={styles.textName}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="done"
                  onSubmitEditing={handleSubmit}
                />
              </View>
              <View style={styles.errorView}>
                {errors['email'] && touched['email'] && (
                  <Text style={styles.errorText}>{errors['email']}</Text>
                )}
              </View>
              <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.editText}>{ScreenStrings.saveChanges}</Text>
              </TouchableOpacity>
              {isKeyboardVisible ? <View style={styles.emptyView} /> : <></>}
            </ScrollView>
          )}
        </View>
      </KeyboardAvoidingView>

      <Modal transparent={true} visible={imageView} animationType="fade">
        <View style={styles.modalFlex}>
          <View
            style={styles.modalCloseView}
            onTouchEnd={() => setImageView(false)}></View>

          <View style={styles.modalCloseView}>
            <Image
              source={{ uri: users?.avatar }}
              style={styles.modalInnerView}
            />
          </View>
          <View
            style={styles.extraView}
            onTouchEnd={() => setImageView(false)}></View>
        </View>
      </Modal>

      <Modal transparent={true} visible={view} animationType="slide">
        <View style={styles.mainModal}>
          <View
            style={styles.modalFlex}
            onTouchEnd={() => setView(false)}></View>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.modalButton}>
              <Text style={styles.textButton}>{ScreenStrings.takePicture}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={launchLibrary}>
              <Text style={styles.textButton}>{ScreenStrings.upload}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setView(false);
                setImageView(true);
              }}>
              <Text style={styles.textButton}>
                {ScreenStrings.profilePicture}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ProfileScreen;
