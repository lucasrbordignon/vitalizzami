import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";
import { ForgotPasswordFormData, forgotPasswordSchema, IForgotPasswordData } from "./model";
import { forgotPassword } from "@/services/forgotPassword";

export const useForgotPasswordViewModel = () => {
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = {
    email: watch("email"),
  };

  const handleChange = (name: keyof ForgotPasswordFormData, value: string) => {
    setValue(name, value);
  };

  const onSubmit = async (data: ForgotPasswordFormData) => {    
    setIsSubmitting(true);

    try {
      const response = await forgotPassword({
        email: data.email
      });

      Alert.alert('success', `Código enviado com sucesso ${response.otp}`)

    } catch (error: any) {
      const message = error.response?.data?.message || "Something went wrong";

      Alert.alert('error', 'Password reset failed: ' + message);

    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    errors,
    handleChange,
    submit: handleSubmit(onSubmit),
    isSubmitting,
  };
};