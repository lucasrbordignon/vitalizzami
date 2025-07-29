import { router } from "expo-router";

export const useStartViewModel = () => {
  const goToLogin = () => router.replace("/public/Login");
  const goToRegister = () => router.replace("/public/Register");

  return { goToLogin, goToRegister };
};