// src/components/ui/Button.tsx
import React from "react";
import { Pressable, Text, ViewStyle } from "react-native";
import { useTheme } from "../../context/ThemeContext";

type Props = {
  label: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
  style?: ViewStyle;
};

export const Button = ({ label, onPress, variant = "primary", style }: Props) => {
  const { colors } = useTheme();

  const backgroundColor =
    variant === "primary" ? colors.primary : "transparent";

  const borderColor =
    variant === "primary" ? colors.buttonBorder : colors.buttonText2;

  const textColor =
    variant === "primary" ? colors.buttonText : colors.buttonText2;

  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          backgroundColor,
          borderColor,
          borderWidth: 1,
          borderRadius: 9999,
          paddingVertical: 16,
        },
        style,
      ]}
    >
      <Text
        style={{
          color: textColor,
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};
