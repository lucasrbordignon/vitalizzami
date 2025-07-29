import { useTheme } from '@/context/ThemeContext';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  const { colors } = useTheme();

  return (
    <SafeAreaView className='flex-1' style={{backgroundColor: colors.background}}>


    </SafeAreaView>
  )
}