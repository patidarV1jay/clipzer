import { FC } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../../hooks';
import styling from './NotificationScreenStyles';
import { Props } from './type';

const RenderNotification: FC<Props> = ({ item }) => {
  const { themeValue } = useTheme();
  const styles = styling(themeValue);

  return (
    <View style={styles.container}>
      <View style={styles.notificationContainer}>
        <Text style={styles.textTitle}>{item?.notification.title}</Text>
        <Text style={styles.textBody}>{item?.notification.body}</Text>
      </View>
    </View>
  );
};

export default RenderNotification;
