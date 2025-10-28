import React from "react";
import {
  Image,
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
  onStop?: () => void;
  isStreaming?: boolean;
  placeholder?: string;
}

export function PromptInput({
  value,
  onChangeText,
  onSubmit,
  onStop,
  isStreaming = false,
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
          editable={!isStreaming}
        />
      </View>

      <View style={styles.toolbar}>
        {isStreaming ? (
          <TouchableOpacity
            style={styles.sendButton}
            onPress={onStop}
            disabled={!onStop}
            accessibilityLabel="Stop generation"
          >
            <Image
              source={require("@/assets/images/rectangle.png")}
              style={styles.sendButtonIcon}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.sendButton}
            onPress={onSubmit}
            disabled={!value.trim()}
            accessibilityLabel="Send message"
          >
            <Image
              source={require("@/assets/images/arrow-up.png")}
              style={styles.sendButtonIcon}
            />
          </TouchableOpacity>
        )}
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
    fontFamily: "Inter_400Regular",
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
    padding: 7,
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#000",
    justifyContent: "center",
  },
  sendButtonIcon: {
    width: 18,
    height: 18,
  },
});
