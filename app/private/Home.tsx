import { useAuth } from '@/context/AuthContext';
import React from 'react';
import { Pressable, Text, View } from 'react-native';


export default function Home() {
  const { logout } = useAuth();

  return (
    <View>
      <Text>Home</Text>  

      <Pressable onPress={logout}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  )
}