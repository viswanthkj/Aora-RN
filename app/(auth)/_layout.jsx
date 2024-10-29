import { View, Text } from "react-native";
import React, {useEffect} from "react";
import { Stack , useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
  // const router = useRouter();

  // useEffect(() => {
  //   // Navigate to 'details' initially
  //   router.replace('/sign-up'); // Replace with your desired initial route
  // }, []);

  return (
    <Stack>
      <Stack.Screen
        name="sign-in"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="sign-up"
        options={{
          headerShown: false,
        }}
      />
      <StatusBar backgroundColor='#161622' style='light'/>
    </Stack>
  );
};

export default AuthLayout;
