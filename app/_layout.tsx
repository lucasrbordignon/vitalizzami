import { ThemeProvider } from "@/context/ThemeContext";
import { Slot } from "expo-router";
import React from "react";
import '../styles/global.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (    
  <ThemeProvider>
    <Slot/>
  </ThemeProvider>
    
  );
};

export default Layout; // Garantir que o componente está sendo exportado como default
