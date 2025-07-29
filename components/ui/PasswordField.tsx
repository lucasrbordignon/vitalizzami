import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import { Pressable, Text, TextInput, TextInputProps, View } from "react-native";

type Props = {
  label: string;
  errorMessage?: string;
  color: {
    inputBg: string;
    borderInput: string;
    primaryText: string;
    secundaryText: string;
    placeholder: string;
    errorMessage: string;
  };
} & TextInputProps;

export const PasswordField = ({ label, errorMessage, color, ...rest }: Props) => {
  const [show, setShow] = useState(false);

  return (
    <View>
      <Text className="mt-6 text-2xl" style={{ color: color.primaryText }}>
        {label}
      </Text>
      <View className="relative flex justify-center mt-2">
        <TextInput
          className="border rounded-xl text-base px-4 py-3"
          style={{
            backgroundColor: color.inputBg,
            borderColor: color.borderInput,
            color: color.primaryText,
          }}
          placeholderTextColor={color.placeholder}
          secureTextEntry={!show}
          {...rest}
        />
        <Pressable onPress={() => setShow(prev => !prev)} className="absolute end-4" hitSlop={8}>
          <Feather color={color.secundaryText} size={24} name={show ? "eye-off" : "eye"} />
        </Pressable>
      </View>
      {errorMessage && (
        <Text className="mt-1 text-sm" style={{ color: color.errorMessage }}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
};
