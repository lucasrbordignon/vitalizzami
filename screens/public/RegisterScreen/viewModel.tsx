import { RegisterFormData, registerSchema } from "@/screens/public/RegisterScreen/model";
import { registerUser } from "@/services/registerService";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useForm } from "react-hook-form";
import Toast from "react-native-toast-message";

export const useRegisterViewModel = () => {
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const goToLogin = () => router.replace("/public/Login");

  const form = {
    username: watch("username"),
    email: watch("email"),
    password: watch("password"),
    confirmPassword: watch("confirmPassword"),
  };

  const handleChange = (name: keyof RegisterFormData, value: string) => {
    setValue(name, value);
  };

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const dataReturn =await registerUser({
        name: data.username,
        email: data.email,
        password: data.password,
      });

      Toast.show({
        type: "success",
        text1: "Registration successful!",
      });

      router.replace("/public/Login");
    } catch (error: any) {
      const message = error.response?.data?.message || "Something went wrong";
      Toast.show({
        type: "error",
        text1: "Registration Failed",
        text2: message,
      });
    }
  };

  return {
    form,
    errors,
    handleChange,
    register: handleSubmit(onSubmit),
    goToLogin
  };
};
