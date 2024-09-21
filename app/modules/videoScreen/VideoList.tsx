import { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../hooks';
import { item } from '../../redux';
import styling from './VideoScreenStyles';

interface Props {
  item: item;
  navigateToPlayer: (arg: item) => void;
}

const VideoList: FC<Props> = ({ item, navigateToPlayer }) => {
  const { themeValue } = useTheme();
  const styles = styling(themeValue);

  return (
    <TouchableOpacity
      onPress={() => navigateToPlayer(item)}
      style={styles.container}>
      <Image
        source={{ uri: item.thumb.replace('http', 'https') }}
        style={styles.thumbnail}
      />
      <View style={styles.description}>
        <Image
          source={{ uri: item.thumb.replace('http', 'https') }}
          style={styles.roundImage}
        />
        <View style={styles.textView}>
          <Text style={styles.textTitle}>{item.title}</Text>
          <Text style={styles.textSubtitle}>{item.subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default VideoList;
