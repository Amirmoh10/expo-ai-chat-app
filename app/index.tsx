import {
  ChatHeader,
  Conversation,
  LoadingIndicator,
  Message,
  PromptInput,
} from "@/components";
import { generateAPIUrl } from "@/utils";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { fetch as expoFetch } from "expo/fetch";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import Markdown from "react-native-markdown-display";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [input, setInput] = useState("");

  const { messages, error, sendMessage, stop, status } = useChat({
    transport: new DefaultChatTransport({
      fetch: expoFetch as unknown as typeof globalThis.fetch,
      api: generateAPIUrl("/api/chat"),
    }),
    onError: (error) => console.error(error, "ERROR"),
  });

  const handleSubmit = () => {
    if (!input.trim()) return;

    sendMessage({ text: input });
    setInput("");
  };

  if (error) {
    Alert.alert("Error", error.message);
  }

  const lastMessage = messages[messages.length - 1];
  const activeAssistantMessage =
    lastMessage?.role === "assistant" ? lastMessage : undefined;
  const assistantHasText =
    activeAssistantMessage?.parts.some(
      (part) => part.type === "text" && part.text.trim().length > 0
    ) ?? false;

  const isStreaming = status === "submitted" || status === "streaming";
  const shouldShowLoadingIndicator = isStreaming && !assistantHasText;

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <ChatHeader title="HybridHeroesGPT" />

        <Conversation>
          {messages.map((m) => (
            <Message key={m.id} role={m.role}>
              {m.parts.map((part, i) => {
                switch (part.type) {
                  case "text":
                    return (
                      <Markdown key={`${m.id}-${i}`} style={markdownStyles}>
                        {part.text}
                      </Markdown>
                    );
                  default:
                    return null;
                }
              })}
            </Message>
          ))}

          {shouldShowLoadingIndicator && (
            <Message role="assistant">
              <LoadingIndicator />
            </Message>
          )}
        </Conversation>

        <PromptInput
          value={input}
          onChangeText={setInput}
          onSubmit={handleSubmit}
          onStop={stop}
          isStreaming={isStreaming}
          placeholder="Message ChatGPT"
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  keyboardView: {
    flex: 1,
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
    marginTop: 12,
    marginBottom: 8,
  },
  heading2: {
    color: "#000000",
    fontFamily: "Inter_700Bold",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 30,
    letterSpacing: -0.8,
    marginTop: 0,
    marginBottom: 8,
  },
  heading3: {
    color: "#000000",
    fontFamily: "Inter_700Bold",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 30,
    letterSpacing: -0.8,
    marginTop: 12,
    marginBottom: 8,
  },
  heading4: {
    color: "#000000",
    fontFamily: "Inter_700Bold",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 30,
    letterSpacing: -0.8,
    marginTop: 12,
    marginBottom: 8,
  },
  heading5: {
    color: "#000000",
    fontFamily: "Inter_700Bold",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 30,
    letterSpacing: -0.8,
    marginTop: 12,
    marginBottom: 8,
  },
  heading6: {
    color: "#000000",
    fontFamily: "Inter_700Bold",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 30,
    letterSpacing: -0.8,
    marginTop: 12,
    marginBottom: 8,
  },
  bullet_list: {
    gap: 12,
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
