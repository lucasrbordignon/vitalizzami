import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";

type Props = {
  label: string;
  errorMessage?: string;
  color: {
    inputBg: string;
    borderInput: string;
    primaryText: string;
    placeholder: string;
    errorMessage: string;
  };
} & TextInputProps;

export const InputField = ({ label, color, errorMessage, ...rest }: Props) => (
  <View className="mt-6">
    <Text className="text-2xl" style={{ color: color.primaryText }}>{label}</Text>
    <TextInput
      className="border rounded-xl text-base px-4 py-3 mt-2"
      placeholderTextColor={color.placeholder}
      style={{
        backgroundColor: color.inputBg,
        borderColor: color.borderInput,
        color: color.primaryText,
      }}
      {...rest}
    />
    {errorMessage && (
      <Text className="mt-1 text-sm" style={{ color: color.errorMessage }}>
        {errorMessage}
      </Text>
    )}
  </View>
);
