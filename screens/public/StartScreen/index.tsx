import Correr from "@/assets/images/correr.svg";
import Logo from "@/assets/images/logo.svg";
import { AppText } from "@/components/ui/AppText";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { SafeAreaView, View } from "react-native";
import { useStartViewModel } from "./viewModel";

const StartScreen = () => {
  const { colors } = useTheme();
  const { goToLogin, goToRegister } = useStartViewModel();

  return (
    <SafeAreaView
      style={{ backgroundColor: colors.background }}
      className="flex-1 justify-center px-8"
    >
      <View className="flex items-center">
        <Correr width={370} />
      </View>

      <View className="flex h-10 w-full items-start mt-0">
        <Logo />
      </View>

      <AppText variant="heading" className="mt-6">
        O poder de uma vida mais ativa, no seu controle
      </AppText>

      <AppText className="mt-3">
        O seu assistente de saúde pessoal, que integra treinos, alimentação e
        hidratação em um único lugar. Com planos de treino personalizados,
        sugestões de refeições saudáveis e lembretes para manter sua hidratação
        em dia.
      </AppText>

      <Button label="Login" onPress={goToLogin} style={{ marginTop: 32 }} />

      <Button label="Register" onPress={goToRegister} variant="secondary" style={{ marginTop: 16 }} />
    </SafeAreaView>
  );
};

export default StartScreen;