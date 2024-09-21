import { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { navigationWithParam, useTheme } from '../../hooks';
import { item } from '../../types';
import styling from './HomeScreenStyles';
import { Routes } from '../../constants';
interface Props {
  item: item;
}
const UserList: FC<Props> = ({ item }) => {
  const { themeValue } = useTheme();
  const styles = styling(themeValue);
  const navigateDetails = () =>{
    navigationWithParam(Routes.Stack, {screen : Routes.UserDetails, params: item},'')
  }
  
  return (
    <TouchableOpacity onPress={navigateDetails}>
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Image source={{ uri: item.avatar }} style={styles.userImage} />
        </View>
        <View style={styles.extraView} />
        <View style={styles.userDetailsView}>
          <Text style={styles.nameText}>
            {item.first_name} {item.last_name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserList;
