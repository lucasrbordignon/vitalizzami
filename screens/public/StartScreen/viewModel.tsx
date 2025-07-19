import { router } from "expo-router";

export const useStartViewModel = () => {
  const goToLogin = () => router.push("/public/Login");
  const goToRegister = () => router.push("/public/Register");

  return { goToLogin, goToRegister };
};