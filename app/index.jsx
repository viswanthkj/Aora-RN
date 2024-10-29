import { SafeAreaView,ScrollView, Text, View,Image } from 'react-native'
import React from 'react'
import { images } from '../constants'
import CustomButton from '../components/CustomButton'
import { StatusBar } from 'expo-status-bar'
import { Redirect, router } from 'expo-router'

const index = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image 
            source={images.logo}
            resizeMode="contain"
            className="w-[134px] h-[84px]"
          />
           <Image 
            source={images.cards}
            resizeMode="contain"
            className="max-w-[380px] w-full h-[300px]"
          />
          <View className="relative mt-5">
          <Text className="text-4xl text-white font-bold text-center">
          Discover Endless Possibilities with { ' '} 
          <Text className="text-secondary-200">Aora</Text>
          </Text>
          <Image 
            source={images.path}
            resizeMode="contain"
            className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
          />
          </View>
          <Text className="mt-7 text-sm text-gray-100 font-pregular text-center">
          Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora
        </Text>
        <CustomButton
           title="Continue with Email"
           handlePress={() => router.push('/sign-in')}
           containerStyle='w-full mt-7'
         />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView> 
  )
}

export default index
