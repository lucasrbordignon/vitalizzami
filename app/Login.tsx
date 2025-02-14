import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Constants from "expo-constants";
import { router } from "expo-router";
import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import Logo from "../assets/images/logo.svg";
import { useTheme } from "../context/ThemeContext";
  
const statusBarHeight = Constants.statusBarHeight

const LoginScreen = () => {
  const { theme, colors, toggleTheme } = useTheme(); // Acessa o tema e as cores

  return (
    <View
      style={{
        backgroundColor: colors.background, // Cor do fundo baseado no tema
      }}

      className="flex-1 justify-center px-6"
    >
      <Pressable onPress={() => {router.back()}} className="border rounded-lg absolute start-6 top-6" style={{borderColor: colors.borderInput, marginTop: statusBarHeight + 4}}>
        <Feather size={32} color={colors.secundaryText} name="chevron-left"/>
      </Pressable>
    
      <View className='flex h-10 w-full items-center mt-16'>  
        <Logo/>
      </View>  

      <Text className="mt-8 font-semibold text-4xl" style={{ color: colors.primaryText}}>Login</Text>
      
      <Text className="mt-3" style={{ color: colors.secundaryText}}>Login to continue using the app</Text>
    
      <View className="mt-8">
        <Text className="text-3xl" style={{ color: colors.primaryText}}>
          Email
        </Text>

        <TextInput
          style={{
            backgroundColor: colors.inputBg,
            borderColor: colors.borderInput,
            color: colors.primaryText
          }}
          placeholder="Enter your email"   
          placeholderTextColor={colors.placeholder}     
          className='border rounded-full text-base px-2 py-3 mt-2'  
        /> 
      </View>

      <View>
        <Text className="mt-6 text-3xl" style={{ color: colors.primaryText}}>
          Password
        </Text>

        <View className="relative flex justify-center mt-2">
          <TextInput
            style={{
              backgroundColor: colors.inputBg,
              borderColor: colors.borderInput,
              color: colors.primaryText
            }}
            placeholder="Enter password"   
            placeholderTextColor={colors.placeholder}     
            className='border rounded-full text-base px-2 py-3'  
          /> 
          {/* trocar por eye-off */}
          <Feather className="absolute end-4" color={colors.secundaryText} size={24} name="eye"/>
        </View>
      </View>

      <View className="w-full flex items-end mt-3">
        <Pressable>
          <Text style={{ color: colors.primaryText }}>Forgot password?</Text>
        </Pressable>
      </View>

      <Pressable
        style={{
          borderColor: colors.buttonBorder,
          backgroundColor: colors.primary
        }}

        className="mt-8 rounded-full py-4 border" 
      >
        <Text style={{ color: colors.buttonText }} className="text-center font-semibold">Login</Text>
      </Pressable>

      <Pressable
        onPress={toggleTheme}
      >
        <Text style={{ color: colors.background }}>Alternar Tema</Text>
      </Pressable>

      <View className="flex flex-row items-center mt-8">
      <View className="flex-1 h-[1px]" style={{backgroundColor: colors.secundaryText}} />
        <View>
          <Text style={{color: colors.secundaryText}} className="text-center px-3">Or Login with</Text>
        </View>
        <View className="flex-1 h-[1px]" style={{backgroundColor: colors.secundaryText}} />
      </View>

      <View className="flex flex-row items-center justify-around mt-8">
        <View style={{borderColor: colors.borderInput}} className="border rounded-full h-16 w-28 flex items-center justify-center">
          <FontAwesome size={36} color={colors.secundaryText} name="facebook"/>
        </View>
        <View style={{borderColor: colors.borderInput}} className="border rounded-full h-16 w-28 flex items-center justify-center">
          <FontAwesome size={36} color={colors.secundaryText} name="google"/>
        </View>
        <View style={{borderColor: colors.borderInput}} className="border rounded-full h-16 w-28 flex items-center justify-center">
          <FontAwesome size={36} color={colors.secundaryText} name="apple"/>
        </View>
      </View>

      <View className="flex flex-row gap-2 items-center justify-center mt-12">
        <Text style={{ color: colors.secundaryText }}>
          Don’t have an account?
        </Text>
        <Pressable>
          <Text style={{color: colors.buttonBorder}} className="font-semibold">
            Register
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;
