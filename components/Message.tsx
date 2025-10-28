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
  return <Markdown style={markdownStyles}>{children}</Markdown>;
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

const markdownStyles = StyleSheet.create({
  body: {
    color: "#000000",
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 22,
    letterSpacing: -0.3,
  },
  heading1: {
    color: "#000000",
    fontFamily: "Inter_700Bold",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 30,
    letterSpacing: -0.8,
  },
  heading2: {
    color: "#000000",
    fontFamily: "Inter_700Bold",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 30,
    letterSpacing: -0.8,
  },
  heading3: {
    color: "#000000",
    fontFamily: "Inter_700Bold",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 30,
    letterSpacing: -0.8,
  },
  heading4: {
    color: "#000000",
    fontFamily: "Inter_700Bold",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 30,
    letterSpacing: -0.8,
  },
  heading5: {
    color: "#000000",
    fontFamily: "Inter_700Bold",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 30,
    letterSpacing: -0.8,
  },
  heading6: {
    color: "#000000",
    fontFamily: "Inter_700Bold",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 30,
    letterSpacing: -0.8,
  },
  bullet_list: {
    marginTop: 12,
    marginBottom: 16,
    paddingLeft: 18,
  },
  list_item: {
    flexDirection: "row",
    marginTop: 8,
  },
  bullet_list_icon: {
    color: "#000000",
    fontFamily: "Inter_700Bold",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 22,
    letterSpacing: -0.3,
  },
  strong: {
    color: "#000000",
    fontFamily: "Inter_700Bold",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 22,
    letterSpacing: -0.3,
  },
});
