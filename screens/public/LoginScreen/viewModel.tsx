import { useState } from "react";

export const useLoginViewModel = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const login = () => {
    console.log("Logging in with:", form);
    // validar e autenticar
  };

  return {
    form,
    handleChange,
    login,
  };
};
