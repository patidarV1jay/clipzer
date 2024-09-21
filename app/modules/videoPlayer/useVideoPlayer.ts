import { useRoute } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import Video from 'react-native-video';
import { useDebounce } from '../../hooks';
import { useAppSelector } from '../../redux';
import { timeFormat } from '../../utils';
import { dataType, routeType } from './types';

const useVideoPlayer = () => {
  const [pause, setPause] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [load, setLoad] = useState<number>(0);
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [time, setTime] = useState<string>();
  const [volume, setVolume] = useState<number>(0);
  const [format, setFormat] = useState<string>();
  const videoRef = useRef<Video | null>();
  const route = useRoute<routeType>();
  const { videos } = useAppSelector(state => state.videoScreen);
  const { source } = route?.params;
  const [description, setDescription] = useState<boolean>(false);

  const hideIcon = () => {
    setShowIcon(false);
  };

  const debounce = useDebounce(5000, hideIcon);

  useEffect(() => {
    debounce();
  }, [pause, volume, showIcon]);

  const handlePause = () => {
    setPause(!pause);
  };

  const skip = (data: dataType) => {
    setCurrentTime(data.currentTime);
  };

  const skipforward = () => {
    const time = currentTime + 10;
    videoRef.current?.seek(time);
  };

  const skipbackward = () => {
    const time = currentTime - 10;
    videoRef.current?.seek(time);
  };

  const resetSlider = (value: number) => {
    if (value === load) {
      setPause(true);
    }
  };

  const iconVisible = () => {
    setShowIcon(!showIcon);
  };

  useEffect(() => {
    setTime(timeFormat(load));
    setFormat(timeFormat(currentTime));
  }, [load, currentTime]);

  const fadeVolume = () => {
    setVolume(volume - 1);
  };

  const upVolume = () => {
    setVolume(volume + 1);
  };

  return {
    source,
    videoRef,
    handlePause,
    pause,
    skip,
    skipbackward,
    skipforward,
    currentTime,
    setCurrentTime,
    resetSlider,
    load,
    setLoad,
    setPause,
    showIcon,
    setShowIcon,
    iconVisible,
    time,
    format,
    volume,
    fadeVolume,
    upVolume,
    videos,
    description,
    setDescription,
  };
};

export default useVideoPlayer;
