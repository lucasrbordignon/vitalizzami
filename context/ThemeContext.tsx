import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, ReactNode, useContext, useState } from "react";
import { useColorScheme } from "react-native";

type ThemeContextType = {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  colors: { primary: string; background: string; primaryText: string; secundaryText: string; buttonBorder: string; buttonText: string; buttonText2: string; inputBg: string; placeholder: string; borderInput: string };
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const colorScheme = useColorScheme(); 

  const colors = {
    light: {
      primary: "#467445",
      background: "#F1F1F1",
      primaryText: "#313131",
      secundaryText: "#717171",
      buttonBorder: "#67B966",
      buttonText: "#F1F1F1",
      buttonText2: "#467445",
      inputBg: "#F5F5F5",
      placeholder: "#A2A2A2",
      borderInput: "#D6D6D6"
    },
    dark: {
      primary: "#2A472A",
      background: "#263638",
      primaryText: "#DBDBDB",
      secundaryText: "#AEAEAE",
      buttonBorder: "#478246",
      buttonText: "#F1F1F1",
      buttonText2: "#F1F1F1",
      inputBg: "#37474F",
      placeholder: "#A2A2A2",
      borderInput: "#455A64"
    },
  };

  const loadTheme = async () => {
    const savedTheme = await AsyncStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
    } else {
      setTheme(colorScheme === "dark" ? "dark" : "light");
    }
  };

  const toggleTheme = async () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    await AsyncStorage.setItem("theme", newTheme); 
  };

  React.useEffect(() => {
    loadTheme();
  }, [colorScheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colors: colors[theme], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };
