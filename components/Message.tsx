import React from "react";
import { StyleSheet, View } from "react-native";
import Markdown from "react-native-markdown-display";

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
      <View style={isUser && styles.userBubble}>{children}</View>
    </View>
  );
}

interface MessageTextProps {
  children: string;
}

export function MessageText({ children }: MessageTextProps) {
  return <Markdown>{children}</Markdown>;
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
  userBubble: {
    backgroundColor: "#F2F2F2",
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
  },
});
