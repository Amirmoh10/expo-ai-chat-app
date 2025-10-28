import React from "react";
import { StyleSheet, Text, View } from "react-native";

type ChatHeaderProps = {
  title: string;
};

export function ChatHeader({ title }: ChatHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    borderBottomWidth: 0.3,
    borderBottomColor: "#E5E5E5",
  },
  title: {
    fontSize: 16,
    fontFamily: "Inter_600SemiBold",
    color: "#000",
  },
});
