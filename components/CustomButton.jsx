import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyle,
  textStyle,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      className={`bg-secondary-200 min-h-[62px] rounded-xl items-center justify-center px-16 mt-10 ${containerStyle} ${
        isLoading ? "opacity-5" : ""
      }`}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Text className={`text-lg font-psemibold text-black ${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
