import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { Slot } from "expo-router";
import React from "react";
import '../styles/global.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (    
  
    <ThemeProvider>
      <AuthProvider>
        <Slot/>
      </AuthProvider>
    </ThemeProvider>

    
  );
};

export default Layout;
