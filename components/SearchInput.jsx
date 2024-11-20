import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import { icons } from "../constants";
import { TouchableOpacity } from "react-native";

const SearchInput = ({
  value,
  onChangeText,
  placeholder,
  keyboardType,
}) => {
  return (
    <View className="w-full border-2 border-black-100 h-16 rounded-2xl bg-black-100 px-5 mt-4 focus:border-secondary-200 flex-row items-center">
      <TextInput
        className="flex-1 text-white font-psemibold focus:border-secondary"
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={"#7B7B8B"}
        keyboardType="default"
        autoCapitalize="none"
      />
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={icons.search}
            className="h-[25px] w-[25px]"
          />
        </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
