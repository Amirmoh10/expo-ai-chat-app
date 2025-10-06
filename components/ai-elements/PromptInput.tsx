import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
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
  isSearchEnabled?: boolean;
  isReasonEnabled?: boolean;
  onSearchToggle?: () => void;
  onReasonToggle?: () => void;
  onAttachmentPress?: () => void;
  onMicrophonePress?: () => void;
}

export function PromptInput({
  value,
  onChangeText,
  onSubmit,
  placeholder = "Message ChatGPT",
  isSearchEnabled = false,
  isReasonEnabled = false,
  onSearchToggle,
  onReasonToggle,
  onAttachmentPress,
  onMicrophonePress,
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
        <View style={styles.toolbarLeft}>
          <TouchableOpacity
            style={styles.toolbarButton}
            onPress={onAttachmentPress}
          >
            <Ionicons name="add" size={24} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.toolbarButtonWithLabel,
              isSearchEnabled && styles.toolbarButtonActive,
            ]}
            onPress={onSearchToggle}
          >
            <Ionicons
              name="globe-outline"
              size={18}
              color={isSearchEnabled ? "#FFF" : "#000"}
            />
            <Text
              style={[
                styles.toolbarButtonLabel,
                isSearchEnabled && styles.toolbarButtonLabelActive,
              ]}
            >
              Search
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.toolbarButtonWithLabel,
              isReasonEnabled && styles.toolbarButtonActive,
            ]}
            onPress={onReasonToggle}
          >
            <Ionicons
              name="bulb-outline"
              size={18}
              color={isReasonEnabled ? "#FFF" : "#000"}
            />
            <Text
              style={[
                styles.toolbarButtonLabel,
                isReasonEnabled && styles.toolbarButtonLabelActive,
              ]}
            >
              Reason
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.toolbarButton}
            onPress={onMicrophonePress}
          >
            <Ionicons name="mic-outline" size={20} color="#000" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[
            styles.sendButton,
            !value.trim() && styles.sendButtonDisabled,
          ]}
          onPress={onSubmit}
          disabled={!value.trim()}
        >
          <Ionicons name="arrow-up" size={24} color="#FFF" />
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
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
  toolbarLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  toolbarButton: {
    padding: 8,
  },
  toolbarButtonWithLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: "#F0F0F0",
  },
  toolbarButtonActive: {
    backgroundColor: "#000",
  },
  toolbarButtonLabel: {
    fontSize: 14,
    color: "#000",
    fontWeight: "500",
  },
  toolbarButtonLabelActive: {
    color: "#FFF",
  },
  sendButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  sendButtonDisabled: {
    backgroundColor: "#999",
  },
});
