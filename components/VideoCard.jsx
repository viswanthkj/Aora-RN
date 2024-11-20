import { useState } from "react";
// import { ResizeMode, Video } from "expo-av";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants";
import { Video, ResizeMode } from "expo-av";

const VideoCard = ({ videoItem }) => {
  const { title, thumbnail, video, creator} = videoItem
  const { username,avatar } = creator
  const [play, setPlay] = useState(false);

  return (
    <View className="flex flex-col items-center px-4 mb-14">
      <View className="flex flex-row gap-3 items-start">
        <View className="flex justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary flex justify-center items-center p-0.5">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>

          <View className="flex justify-center flex-1 ml-3 gap-y-1">
            <Text
              className="font-psemibold text-sm text-white"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              className="text-xs text-gray-100 font-pregular"
              numberOfLines={1}
            >
              {username}
            </Text>
          </View>
        </View>

        <View className="pt-2">
          <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
        </View>
      </View>

      {play ? (
        // <Text className="text-xl">Playing....</Text>
        <Video
          source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" }}
          className="w-full h-60 rounded-xl mt-3 border-red-200"
          style={{ width: '100%', height: 300, marginTop: 10, borderRadius: 20}}
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          style={{
            width: '100%', // Tailwind 'w-full' -> full width
            height: 240, // Tailwind 'h-60' -> 60 * 4 = 240
            borderRadius: 16, // Tailwind 'rounded-xl' -> 16px border radius
            marginTop: 12, // Tailwind 'mt-3' -> 3 * 4 = 12
            position: 'relative', // Tailwind 'relative'
            justifyContent: 'center', // Tailwind 'justify-center'
            alignItems: 'center', // Tailwind 'items-center'
            display: 'flex', // Tailwind 'flex' (explicit for consistency)
          }}
          // className="w-full h-60 rounded-xl mt-3 relative flex justify-center items-center"
        >
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full rounded-xl mt-3"
            resizeMode="cover"
          />

          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;