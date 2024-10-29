import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { icons } from '../constants';
import { TouchableOpacity } from 'react-native';

const FormField = ({ otherStyles, label, value, onChangeText, secureTextEntry, placeholder, keyboardType }) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{label}</Text>
      <View className="w-full border-2 border-black-100 h-16 rounded-2xl bg-black-100 px-5 mt-4 focus:border-secondary-200 flex-row items-center">
        <TextInput 
        className="flex-1 text-white font-psemibold focus:border-secondary"
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={"#7B7B8B"}
        secureTextEntry={secureTextEntry && !showPassword}        keyboardType={keyboardType}
        autoCapitalize="none"
        />
        
        {label === 'Password' && secureTextEntry && (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
        <Image 
          source={showPassword ? icons.eyeHide : icons.eye}
          className="h-[30px] w-[30px]"
        />
        </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
});
