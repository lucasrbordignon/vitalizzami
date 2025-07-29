import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { Slot } from "expo-router";
import React from "react";
import Toast from 'react-native-toast-message';
import '../styles/global.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (        
    <>
      <Toast />
      <ThemeProvider>
        <AuthProvider>
          <Slot/>         
        </AuthProvider>
      </ThemeProvider>
    </>    
  );
};

export default Layout;
