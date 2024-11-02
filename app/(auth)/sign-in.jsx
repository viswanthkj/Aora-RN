import { SafeAreaView, ScrollView, Text, View, Image, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { getCurrentUser, signIn } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalContext";

const SignIn = () => {
  const { setUser, setIsLoggedIn} = useGlobalContext()
  const [form, setForm] = useState({
    email: "",
    password: "",
    isSubmitting: false
  });

  const handleSubmit = async() => {
    if(!form.email || !form.password) {
      Alert.alert('Error', 'Please fill all fields')
    }

    setForm({...form, isSubmitting: true})
    try {
     await signIn(form.email, form.password)
     const currentUser = await getCurrentUser();
     setUser(currentUser)
     setIsLoggedIn(true)
      // set to global state
      Alert.alert('Success', 'User signed in successfully')
      router.replace('/home')
    } catch (error) {
      console.log(error)
      Alert.alert('Error', error)
    } finally {
      setForm({...form, isSubmitting: false})
    }
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
            Login to Aora
          </Text>

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
           title="Log in"
           handlePress={handleSubmit}
           containerStyle='mt-7'
           isLoading={form.isSubmitting}
         />

         <View className="pt-7 flex-row justify-center gap-2">
          <Text className="text-lg text-gray-100 font-pregular">Don’t have an account?</Text>
          <Link href="./sign-up" className="text-lg text-secondary-100 font-psemibold">Sign up</Link>
         </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default SignIn;
