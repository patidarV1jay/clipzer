import Slider from '@react-native-community/slider';
import {
  ArrowClockwise,
  ArrowCounterClockwise,
  Chats,
  CornersOut,
  IdentificationCard,
  Pause,
  Play,
  Share,
  SpeakerHigh,
  SpeakerLow,
  ThumbsDown,
  ThumbsUp,
} from 'phosphor-react-native';
import React from 'react';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import Video from 'react-native-video';
import { ScreenStrings } from '../../constants';
import { useTheme } from '../../hooks';
import { Color, moderateScale } from '../../theme';
import styling from './VideoPlayerStyles';
import useVideoPlayer from './useVideoPlayer';

const VideoPlayer = () => {
  const {
    source,
    videoRef,
    pause,
    handlePause,
    skip,
    skipbackward,
    skipforward,
    currentTime,
    resetSlider,
    load,
    setLoad,
    showIcon,
    iconVisible,
    time,
    format,
    volume,
    fadeVolume,
    upVolume,
    description,
    setDescription,
  } = useVideoPlayer();
  const { themeValue } = useTheme();
  const styles = styling(themeValue);

  return (
    <View style={styles.mainContainer}>
      <Pressable onPress={iconVisible}>
        <Video
          ref={videoRef}
          source={{ uri: source.sources[0].replace('http', 'https') }}
          style={styles.videoTag}
          onProgress={skip}
          paused={pause}
          onLoad={load => {
            setLoad(load.duration);
          }}
          volume={volume}
        />
        {showIcon && (
          <>
            <View style={styles.controller}>
              <TouchableOpacity onPress={skipbackward}>
                <ArrowCounterClockwise
                  size={moderateScale(32)}
                  color={Color[themeValue]?.commonWhite}
                  weight="bold"
                />
              </TouchableOpacity>
              {!pause ? (
                <TouchableOpacity onPress={handlePause}>
                  <Pause
                    size={moderateScale(32)}
                    color={Color[themeValue]?.commonWhite}
                    weight="fill"
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={handlePause}>
                  <Play
                    size={moderateScale(32)}
                    color={Color[themeValue]?.commonWhite}
                    weight="fill"
                  />
                </TouchableOpacity>
              )}
              <TouchableOpacity onPress={skipforward}>
                <ArrowClockwise
                  size={moderateScale(32)}
                  color={Color[themeValue]?.commonWhite}
                  weight="bold"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.slider}>
              <Slider
                style={styles.mainSlider}
                minimumValue={0}
                maximumValue={load}
                minimumTrackTintColor={Color[themeValue]?.commonWhite}
                maximumTrackTintColor={Color[themeValue]?.commonBlack}
                onValueChange={value => videoRef.current?.seek(value)}
                value={currentTime}
                onSlidingComplete={value => resetSlider(value)}
              />
              <TouchableOpacity
                onPress={() => videoRef?.current?.presentFullscreenPlayer()}
                style={styles.screenAlign}>
                <CornersOut
                  size={moderateScale(32)}
                  color={Color[themeValue]?.commonWhite}
                  weight="fill"
                />
              </TouchableOpacity>
              <View style={styles.timeView}>
                <Text style={styles.textTime}>{format}</Text>
                <Text style={styles.textTime}>{time}</Text>
              </View>
            </View>
            <View style={styles.volume}>
              <TouchableOpacity onPress={fadeVolume}>
                <SpeakerLow
                  size={moderateScale(32)}
                  color={Color[themeValue]?.commonWhite}
                  weight="fill"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={upVolume}>
                <SpeakerHigh
                  size={moderateScale(32)}
                  color={Color[themeValue]?.commonWhite}
                  weight="fill"
                />
              </TouchableOpacity>
            </View>
          </>
        )}
      </Pressable>
      <View style={styles.description}>
        <Text style={styles.textTitle}>{source.title}</Text>
        <Text numberOfLines={5} style={styles.textDescription}>
          {source.description}
        </Text>
        <View style={styles.thumbContent}>
          <View style={styles.thumbImage}>
            <Image
              source={{ uri: source.thumb.replace('http', 'https') }}
              style={styles.thumbnail}
            />
            <View style={styles.subscriberView}>
              <Text style={styles.text}>{source.subtitle}</Text>
              <Text style={styles.text}>{ScreenStrings.subscribers}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.subscribButton}>
            <Text style={styles.subscribeText}>{ScreenStrings.subscribe}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.options}>
          <View style={styles.likeButton}>
            <TouchableOpacity style={styles.like}>
              <ThumbsUp
                size={moderateScale(25)}
                color={Color[themeValue]?.commonBlack}
                weight="bold"
              />
              <Text style={styles.optionText}>{ScreenStrings.subscribers}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <ThumbsDown
                size={moderateScale(25)}
                color={Color[themeValue]?.commonBlack}
                weight="bold"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.likeButton}>
            <TouchableOpacity style={styles.share}>
              <Share
                size={moderateScale(25)}
                color={Color[themeValue]?.commonBlack}
                weight="bold"
              />
              <Text style={styles.optionText}>{ScreenStrings.share}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.likeButton}>
            <TouchableOpacity style={styles.share}>
              <Chats
                size={moderateScale(25)}
                color={Color[themeValue]?.commonBlack}
                weight="bold"
              />
              <Text style={styles.optionText}>{ScreenStrings.chat}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.likeButton}>
            <TouchableOpacity style={styles.share}>
              <IdentificationCard
                size={moderateScale(25)}
                color={Color[themeValue]?.commonBlack}
                weight="bold"
              />
              <Text style={styles.optionText}>{ScreenStrings.report}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.commentView}>
          <Text style={styles.textComment}>{ScreenStrings.comment}</Text>
          <View style={styles.comment}>
            <Image
              source={{ uri: source.thumb.replace('http', 'https') }}
              style={styles.commentImage}
            />
            <Text
              style={styles.optionText}
              onPress={() => setDescription(!description)}>
              {description ? (
                source.description
              ) : (
                <>
                  {source.description.length > 90
                    ? source.description.substring(0, 90) +
                      ScreenStrings.readMore
                    : source.description}
                </>
              )}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default VideoPlayer;
