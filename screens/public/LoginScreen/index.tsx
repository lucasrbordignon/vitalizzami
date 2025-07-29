import Header from "@/components/layouts/Header";
import { InputField } from "@/components/ui/InputField";
import { PasswordField } from "@/components/ui/PasswordField";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { useLoginViewModel } from "./viewModel";

const LoginScreen = () => {
  const { colors } = useTheme();
  const { form, handleChange, errors, login, isSubmitting, goToRegister } = useLoginViewModel();

  return (
    <>
      <Toast />
      <SafeAreaView
        className="px-8 flex-1"
        style={{ backgroundColor: colors.background }}
      >
        <Header to="/public" />

        <View className="flex-1 mt-4">
          <Text className="mt-8 font-semibold text-4xl" style={{ color: colors.primaryText }}>
            Login
          </Text>

          <Text className="mt-3" style={{ color: colors.secundaryText }}>
            Login to continue using the app
          </Text>

          <InputField
            label="Email"
            value={form.email}
            onChangeText={(value) => handleChange("email", value)}
            placeholder="Enter your email"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
            errorMessage={errors.email?.message}
            color={colors}
          />

          <PasswordField
            label="Password"
            value={form.password}
            onChangeText={(value) => handleChange("password", value)}
            placeholder="Enter password"
            color={colors}
            errorMessage={errors.password?.message}
          />

          <View className="w-full flex items-end mt-3">
            <Pressable>
              <Text style={{ color: colors.primaryText }}>Forgot password?</Text>
            </Pressable>
          </View>

          <Pressable
            onPress={login}
            style={{
              borderColor: colors.buttonBorder,
              backgroundColor: colors.primary,
            }}
            className="mt-8 rounded-xl py-4 border"
          >
            {isSubmitting ? (
              <ActivityIndicator color={colors.buttonText} />
            ) : (
              <Text style={{ color: colors.buttonText }} className="text-center font-semibold">
                Login
              </Text>
            )}
          </Pressable>

          <View className="flex-row gap-2 items-center justify-center mt-2">
            <Text style={{ color: colors.secundaryText }}>
              Don’t have an account?
            </Text>
            <Pressable onPress={goToRegister}>
              <Text style={{ color: colors.buttonBorder }} className="font-semibold">
                Register
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;
