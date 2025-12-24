import Logo from "@/assets/images/logo.svg";
import { useTheme } from '@/context/ThemeContext';
import Feather from "@expo/vector-icons/Feather";
import { router, useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

type ButtonBackProps = {
  to: Parameters<typeof router.push>[0]; 
  withLogo?: boolean;
};

export default function Header({ to, withLogo }:ButtonBackProps) {
  const { colors } = useTheme(); 
  const router = useRouter();

  return (
    <View className="mt-4 h-10">
      { withLogo &&
        <View className="w-full flex items-center">            
          <Logo/>
        </View> 
      }
      <View className="absolute">
        <TouchableOpacity 
          onPress={() => { router.navigate(to) }}
          style={{
            borderWidth: 1,
            borderRadius: 8,
            borderColor: colors.borderInput
          }}
        >
          <Feather size={32} color={colors.secundaryText} name="chevron-left"/>
        </TouchableOpacity>
      </View>
    </View>
  )
}