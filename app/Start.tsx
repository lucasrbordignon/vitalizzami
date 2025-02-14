import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import Correr from "../assets/images/correr.svg";
import Logo from "../assets/images/logo.svg";
import { useTheme } from "../context/ThemeContext";
  
const StartScreen = () => {
  const { theme, colors, toggleTheme } = useTheme(); // Acessa o tema e as cores

  return (
    <View
      style={{
        backgroundColor: colors.background, // Cor do fundo baseado no tema
      }}

      className="flex-1 justify-center px-6"
    >
      <View className='flex items-center'> 
        <Correr width={370}/>
      </View> 

      <View className='flex h-10 w-full items-start mt-0'>  
        <Logo/>
      </View>  

      <Text className="mt-6" style={{ color: colors.primaryText, fontSize: 24 }}>O poder de uma vida mais ativa, no seu controle</Text>
      
      <Text className="mt-3" style={{ color: colors.secundaryText}}>O seu assistente de saúde pessoal, que integra treinos, alimentação e hidratação em um único lugar. Com planos de treino personalizados, sugestões de refeições saudáveis e lembretes para manter sua hidratação em dia.</Text>
    
      <Pressable
        style={{
          borderColor: colors.buttonBorder,
          backgroundColor: colors.primary
        }}
        onPress={() => {router.push('/Login')}}
        className="mt-8 rounded-full py-4 border" 
      >
        <Text style={{ color: colors.buttonText }} className="text-center font-semibold">Login</Text>
      </Pressable>

      <Pressable
        style={{
          borderColor: colors.buttonText2,
        }}

        className="mt-4 rounded-full py-4 border bg"
      >
        <Text style={{ color: colors.buttonText2 }} className="text-center font-semibold">Register</Text>
      </Pressable>
    

      <Pressable
        onPress={toggleTheme}
      >
        <Text style={{ color: colors.background }}>Alternar Tema</Text>
      </Pressable>

    </View>
  );
};

export default StartScreen;
