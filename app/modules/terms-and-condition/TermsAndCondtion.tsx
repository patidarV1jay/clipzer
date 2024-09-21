import { View } from 'react-native';
import WebView from 'react-native-webview';
import { APIConstants } from '../../constants';
import { useTheme } from '../../hooks';
import { appStyles } from '../../theme';

const TermsAndCondtion = () => {
  const { themeValue } = useTheme();
  const styles = appStyles(themeValue);

  return (
    <View style={styles.commonStyles}>
      <WebView
        source={{ uri: APIConstants.google }}
        style={styles.commonStyles}
      />
    </View>
  );
};

export default TermsAndCondtion;
