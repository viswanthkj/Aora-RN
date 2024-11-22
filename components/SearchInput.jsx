import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, Alert } from "react-native";
import { icons } from "../constants";
import { TouchableOpacity } from "react-native";
import { usePathname, router } from "expo-router";

const SearchInput = ({
  initialQuery
}) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");
  return (
    <View className="w-full border-2 border-black-100 h-16 rounded-2xl bg-black-100 px-5 mt-4 focus:border-secondary-200 flex-row items-center">
       <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={query}
        placeholder="Search a video topic"
        placeholderTextColor="#CDCDE0"
        onChangeText={(e) => setQuery(e)}
      />
        <TouchableOpacity 
         onPress={() => {
          if (query === "")
             return Alert.alert(
              "Missing Query",
              "Please input something to search results across database"
            );

          if (pathname.startsWith("/search")) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}>
          <Image
            source={icons.search}
            className="h-[25px] w-[25px]"
          />
        </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
