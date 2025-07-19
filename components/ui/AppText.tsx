import React from "react";
import { Text, TextProps } from "react-native";
import { useTheme } from "../../context/ThemeContext";

type Props = TextProps & {
  variant?: "heading" | "body";
};

export const AppText = ({ children, variant = "body", style, ...rest }: Props) => {
  const { colors } = useTheme();

  const fontSize = variant === "heading" ? 24 : 14;
  const color =
    variant === "heading" ? colors.primaryText : colors.secundaryText;

  return (
    <Text
      style={[{ fontSize, color }, style]}
      {...rest}
    >
      {children}
    </Text>
  );
};
