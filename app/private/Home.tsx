import { useAuth } from '@/context/AuthContext';
import { useTheme } from '@/context/ThemeContext';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  const { colors } = useTheme();
  const { logout } = useAuth()

  return (
    <SafeAreaView className='flex-1' style={{backgroundColor: colors.background}}>
      <Pressable className='px-8' onPress={logout}>
        <Text style={{color: colors.primaryText}}>Logout</Text>
      </Pressable>
    </SafeAreaView>
  )
}