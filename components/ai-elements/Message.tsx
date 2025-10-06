import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface MessageProps {
  role: "user" | "assistant" | "system";
  children: React.ReactNode;
}

export function Message({ role, children }: MessageProps) {
  const isUser = role === "user";
  const isSystem = role === "system";

  return (
    <View
      style={[
        styles.container,
        isUser
          ? styles.userContainer
          : isSystem
          ? styles.systemContainer
          : styles.assistantContainer,
      ]}
    >
      <View
        style={[
          styles.bubble,
          isUser
            ? styles.userBubble
            : isSystem
            ? styles.systemBubble
            : styles.assistantBubble,
        ]}
      >
        {children}
      </View>
    </View>
  );
}

interface MessageTextProps {
  children: string;
}

export function MessageText({ children }: MessageTextProps) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  userContainer: {
    alignItems: "flex-end",
  },
  assistantContainer: {
    alignItems: "flex-start",
  },
  systemContainer: {
    alignItems: "center",
  },
  bubble: {
    maxWidth: "80%",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
  },
  userBubble: {
    backgroundColor: "#000",
  },
  assistantBubble: {
    backgroundColor: "#F0F0F0",
  },
  systemBubble: {
    backgroundColor: "#E8F4FF",
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
  },
});
