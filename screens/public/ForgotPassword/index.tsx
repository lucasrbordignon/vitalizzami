import Header from "@/components/layouts/Header";
import { InputField } from "@/components/ui/InputField";
import Forgot from "@/assets/images/forgot.svg";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { useForgotPasswordViewModel } from "./viewModel";

const ForgotPasswordScreen = () => {
  const { colors } = useTheme();
  const { form, handleChange, errors, submit, isSubmitting } = useForgotPasswordViewModel();

  return (
    <>
      <Toast />
      <SafeAreaView
        className="px-8 flex-1"
        style={{ backgroundColor: colors.background }}
      >
        <Header to="/public/Login" />

        <View className="flex items-center">
          <Forgot width={370} />
        </View>

        <View className="flex-1 mt-4">
          <Text className="mt-8 font-semibold text-4xl" style={{ color: colors.primaryText }}>
            Forgot Password?
          </Text>

          <Text className="mt-3" style={{ color: colors.secundaryText }}>
            Enter your email address below to receive a password reset code.
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

          <Pressable
            onPress={submit}
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
                Send Code
              </Text>
            )}
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
};

export default ForgotPasswordScreen;
