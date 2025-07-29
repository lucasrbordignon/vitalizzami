import Header from "@/components/layouts/Header";
import { InputField } from "@/components/ui/InputField";
import { PasswordField } from "@/components/ui/PasswordField";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRegisterViewModel } from "./viewModel";

const RegisterScreen = () => {
  const { colors } = useTheme();
  const { form, handleChange, register, errors, goToLogin } = useRegisterViewModel();

  return (
    <SafeAreaView 
      className="px-8 flex-1" 
      style={{ backgroundColor: colors.background }}
    >
      <Header to="/public" />
      <View className="flex-1 mt-4">
        <Text className="mt-8 font-semibold text-4xl" style={{ color: colors.primaryText }}>
          Register
        </Text>
        <Text className="mt-3" style={{ color: colors.secundaryText }}>
          Enter Your Personal Information
        </Text>

        <InputField
          label="Username"
          value={form.username}
          onChangeText={value => handleChange("username", value)}
          color={colors}
          placeholder="Enter your username"
          errorMessage={errors.username?.message}
          autoCapitalize="none"
        />
        <InputField
          label="Email"
          value={form.email}
          onChangeText={value => handleChange("email", value)}
          color={colors}
          placeholder="Enter your email"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
          errorMessage={errors.email?.message}
        />
        <PasswordField
          label="Password"
          value={form.password}
          onChangeText={value => handleChange("password", value)}
          color={colors}
          placeholder="Enter password"
          errorMessage={errors.password?.message}
        />
        <PasswordField
          label="Confirm Password"
          value={form.confirmPassword}
          onChangeText={value => handleChange("confirmPassword", value)}
          color={colors}
          placeholder="Confirm password"     
          errorMessage={errors.confirmPassword?.message}     
        />

        <Pressable
          onPress={register}
          style={{ backgroundColor: colors.primary, borderColor: colors.buttonBorder }}
          className="mt-8 rounded-xl py-4 border"
        >
          <Text className="text-center font-semibold" style={{ color: colors.buttonText }}>
            Register
          </Text>
        </Pressable>

        <View className="flex-row justify-center items-center gap-2 mt-2">
          <Text style={{ color: colors.secundaryText }}>Do have an account?</Text>
          <Pressable onPress={goToLogin}>
            <Text className="font-semibold" style={{ color: colors.buttonBorder }}>
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
