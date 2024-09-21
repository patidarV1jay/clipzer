import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import VideoList from './VideoList';
import useVideoScreen from './useVideoScreen';

const VideoScreen = () => {
  const { videos, isloading, navigateToPlayer } = useVideoScreen();

  return (
    <>
      {isloading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={videos}
          renderItem={({ item }) => (
            <VideoList item={item} navigateToPlayer={navigateToPlayer} />
          )}
        />
      )}
    </>
  );
};

export default VideoScreen;
