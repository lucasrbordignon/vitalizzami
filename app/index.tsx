import { useTheme } from "@/context/ThemeContext";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function Index() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);
  const { colors } = useTheme()

  useEffect(() => {
    const timeout = setTimeout(() => setIsReady(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    if (isAuthenticated) {
      router.replace("/private/Home");
    } else {
      router.replace("/public");
    }
  }, [isReady, isAuthenticated]);

  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator size="large" />
    </View>
  );
}
