import { FlatList, Image, Text, View } from 'react-native';
import { Images } from '../../assets';
import { ScreenStrings } from '../../constants';
import { useTheme } from '../../hooks';
import styling from './NotificationScreenStyles';
import RenderNotification from './RenderNotification';
import useNotificationScreen from './useNotificationScreen';

const NotificationScreen = () => {
  const { notifications } = useNotificationScreen();
  const { themeValue } = useTheme();
  const styles = styling(themeValue);
  const EmptyList = () => {
    
    return (
      <View style={styles.emptyView}>
        <Image
          source={Images.zeroNotification}
          style={styles.imageNoNotification}
        />
        <Text style={styles.textHeader}>{ScreenStrings.noNotify}</Text>
        <Text style={styles.textFooter}>
          {ScreenStrings.noNotificationPresent}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={({ item }) => <RenderNotification item={item} />}
        ListEmptyComponent={EmptyList}
      />
    </View>
  );
};

export default NotificationScreen;
