import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ScreenStrings } from '../../constants';
import { useTheme } from '../../hooks';
import styling from './UserDetailsScreen';
import useUserDetails from './useUserDetails';

const UserDetails = () => {
  const { item, follow, isFollow } = useUserDetails();
  const { themeValue } = useTheme();
  const styles = styling(themeValue);

  return (
    <View style={styles.mainContainer}>
      <Image source={{ uri: item?.avatar }} style={styles.extendImage} />
      <Image source={{ uri: item?.avatar }} style={styles.userImage} />
      <View style={styles.description}>
        <Text style={styles.headerText}>{ScreenStrings.firstname}</Text>
        <Text style={styles.textName}>{item?.first_name}</Text>
        <View style={styles.line} />
        <View style={styles.spacingView}>
          <Text style={styles.headerText}>{ScreenStrings.lastname}</Text>
          <Text style={styles.textName}>{item?.last_name}</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.spacingView}>
          <Text style={styles.headerText}>{ScreenStrings.mail}</Text>
          <Text style={styles.textName}>{item?.email}</Text>
          <View style={styles.line} />
        </View>
        {isFollow ? (
          <TouchableOpacity style={styles.followingButton} onPress={follow}>
            <Text style={styles.followText}> {ScreenStrings.following}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.followButton} onPress={follow}>
            <Text style={styles.followText}> {ScreenStrings.follow}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default UserDetails;
