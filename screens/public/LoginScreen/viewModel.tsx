import { useAuth } from "@/context/AuthContext";
import { LoginFormData, loginSchema } from "@/screens/public/LoginScreen/model";
import { loginUser } from '@/services/loginService';
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";

export const useLoginViewModel = () => {
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });


  const { login } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const goToRegister = () => router.replace("/public/Register");

  const form = {
    email: watch("email"),
    password: watch("password"),
  };

  const handleChange = (name: keyof LoginFormData, value: string) => {
    setValue(name, value);
  };

  const onSubmit = async (data: LoginFormData) => {    
    setIsSubmitting(true);

    try {
      const dataReturn = await loginUser({
        email: data.email,
        password: data.password,
      });

      const accessToken = dataReturn.accessToken;
      await login(accessToken); 

      Alert.alert('success', 'Login successful!')

    } catch (error: any) {
      const message = error.response?.data?.message || "Something went wrong";

      Alert.alert('error', 'Login Failed')

    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    errors,
    handleChange,
    login: handleSubmit(onSubmit),
    isSubmitting,
    goToRegister
  };
};
