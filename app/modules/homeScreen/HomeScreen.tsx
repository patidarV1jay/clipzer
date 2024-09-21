import React, { FC } from 'react';
import { ActivityIndicator, FlatList, Image, View } from 'react-native';
import { Images } from '../../assets';
import { useTheme } from '../../hooks';
import { Color } from '../../theme';
import styling from './HomeScreenStyles';
import UserList from './UserList';
import useHomeScreen from './useHomeScreen';

const HomeScreen: FC = () => {
  const { setCurrentPage, currentPage, filterUser } = useHomeScreen();
  const { themeValue } = useTheme();
  const styles = styling(themeValue);
  const EmptyComponent = () => {
    return (
      <View style={styles.emptyComponentView}>
        <Image source={Images.noData} style={styles.noDataImage} />
      </View>
    );
  };
  const renderLoader = () => {
    return (
      <>
        {currentPage === 1 ? (
          <View style={styles.loaderView}>
            <ActivityIndicator
              size="large"
              color={Color[themeValue]?.palindromcolor}
            />
          </View>
        ) : (
          ''
        )}
      </>
    );
  };
  const loadMoreItem = () => {
    if (currentPage <= 1) setCurrentPage(currentPage + 1);
  };
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={filterUser}
        renderItem={({ item }) => <UserList item={item} />}
        keyExtractor={item => item?.email}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0}
        contentContainerStyle={styles.paddingList}
        ListEmptyComponent={EmptyComponent}
      />
    </View>
  );
};

export default HomeScreen;
