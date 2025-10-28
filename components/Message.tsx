import React from "react";
import { StyleSheet, View } from "react-native";

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

const styles = StyleSheet.create({
  userContainer: {
    alignItems: "flex-end",
    marginVertical: 8,
  },
  assistantContainer: {
    alignItems: "flex-start",
    marginVertical: 8,
  },
  systemContainer: {
    alignItems: "center",
    marginVertical: 8,
  },
  userBubble: {
    backgroundColor: "#F2F2F2",
    borderRadius: 100,
    // paddingVertical: 8, // not needed because of markdown
    paddingHorizontal: 15,
  },
});
