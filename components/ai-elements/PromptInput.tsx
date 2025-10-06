import Feather from "@expo/vector-icons/Feather";
import React from "react";
import {
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface PromptInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
  placeholder?: string;
}

export function PromptInput({
  value,
  onChangeText,
  onSubmit,
  placeholder = "Message ChatGPT",
}: PromptInputProps) {
  const insets = useSafeAreaInsets();
  const bottomPadding = Platform.OS === "ios" ? insets.bottom : 12;

  return (
    <View style={[styles.container, { paddingBottom: bottomPadding }]}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#999"
          multiline
          maxLength={2000}
        />
      </View>

      <View style={styles.toolbar}>
        <TouchableOpacity
          style={styles.sendButton}
          onPress={onSubmit}
          disabled={!value.trim()}
        >
          <Feather name="send" size={16} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 8,
  },
  inputContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  input: {
    fontSize: 16,
    color: "#000",
    minHeight: 40,
    maxHeight: 120,
    paddingVertical: 8,
  },
  toolbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
  sendButton: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
});
