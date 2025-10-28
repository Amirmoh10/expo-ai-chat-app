import {
  ChatHeader,
  Conversation,
  Message,
  MessageText,
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
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [input, setInput] = useState("");

  const { messages, error, sendMessage } = useChat({
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
                      <MessageText key={`${m.id}-${i}`}>
                        {part.text}
                      </MessageText>
                    );
                  default:
                    return null;
                }
              })}
            </Message>
          ))}
        </Conversation>

        <PromptInput
          value={input}
          onChangeText={setInput}
          onSubmit={handleSubmit}
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
