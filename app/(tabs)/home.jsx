import { View, Text, SafeAreaView, FlatList, Image, RefreshControl, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import TrendingVideos from "../../components/TrendingVideos";
import EmptyState from "../../components/EmptyState";
import { getAllPosts } from "../../lib/appwrite";
import useAppwrite  from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";

const Home = () => {
  const { data: posts, refetch} = useAppwrite(getAllPosts)
  const [keyword, setKeyword] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const listData = [
    {
      id: 1,
      title: "title1",
    },
    {
      id: 2,
      title: "title2",
    },
  ];

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  const renderItem = ({ item }) => (
     <VideoCard videoItem={item}/>
  );
  return (
    <SafeAreaView className="bg-primary h-full">
      {/* <Text>fewfewfwe</Text> */}
      <FlatList
        data={posts} // Array of items to render
        renderItem={renderItem} // Function to render each item
        keyExtractor={(item) => item.$id} // Unique key for each item
        ListHeaderComponent={() => {
          return (
            <View className="px-4">
              <View className="flex-row justify-between items-center mt-5">
                <View>
                  <Text className="text-md text-white font-psemibold">
                    Welcome back
                  </Text>
                  <Text className="text-2xl text-white font-psemibold">
                    Js mastery
                  </Text>
                </View>
                <Image
                  source={images.logoSmall}
                  className="h-[30px] w-[30px]"
                  resizeMode="contain"
                />
              </View>
              <SearchInput
                placeholder="Search a video topic"
                onChangeText={(keyword) => setKeyword(keyword)}
                value={keyword}
              />
              <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-lg font-pregular text-gray-100 mb-3">
                Trending Videos
              </Text>

              <TrendingVideos posts={listData ?? []} />
            </View>
            </View>
          );
        }}
        ListEmptyComponent={() => (
          <EmptyState
          title="No Videos Found"
          subtitle="No videos created yet"
        />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
