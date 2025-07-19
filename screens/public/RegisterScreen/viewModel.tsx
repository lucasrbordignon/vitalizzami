import { useState } from "react";

export const useRegisterViewModel = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const register = () => {
    console.log("Registering user: ", form);
    // Validar e enviar
  };

  return {
    form,
    handleChange,
    register,
  };
};
