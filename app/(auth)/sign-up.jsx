import { SafeAreaView, ScrollView, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Link } from "expo-router";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";

const SignUp = () => {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
    isSubmitting: false
  });

  const handleSubmit = () => {
    
  }
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-10">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white font-semibold mt-10">
            Sign up to Aora
          </Text>

          <FormField
            label="Username"
            onChangeText={(text) => setForm({ ...form, userName: text })}
            value={form.userName}
            placeholder="Your username"
            otherStyles="mt-7"
          />

          <FormField
            label="Email"
            onChangeText={(text) => setForm({ ...form, email: text })}
            value={form.email}
            placeholder="Your email"
            keyboardType="email-address"
            otherStyles="mt-7"
          />

          <FormField
            label="Password"
            onChangeText={(text) => setForm({ ...form, password: text })}
            value={form.password}
            placeholder="Your password"
            keyboardType="email-address"
            otherStyles="mt-7"
            secureTextEntry={true}
          />
          <CustomButton
           title="Sign up"
           handlePress={handleSubmit}
           containerStyle='mt-7'
           isLoading={form.isSubmitting}
         />

         <View className="pt-7 flex-row justify-center gap-2">
          <Text className="text-lg text-gray-100 font-pregular">Already have an account? Login</Text>
          <Link href="./sign-in" className="text-lg text-secondary-100 font-psemibold">Login</Link>
         </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default SignUp;