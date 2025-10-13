import React, { useEffect, useRef, useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";

interface ConversationProps {
  children: React.ReactNode;
}

export function Conversation({ children }: ConversationProps) {
  const scrollViewRef = useRef<ScrollView>(null);
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);

  useEffect(() => {
    // Auto-scroll to bottom when new messages arrive
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [children]);

  return (
    <View style={styles.wrapper}>
      <ScrollView
        ref={scrollViewRef}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
        onScroll={(e) => {
          const { layoutMeasurement, contentOffset, contentSize } =
            e.nativeEvent;
          const distanceFromBottom =
            contentSize.height - (layoutMeasurement.height + contentOffset.y);
          setShowScrollToBottom(distanceFromBottom > 24);
        }}
        scrollEventThrottle={16}
      >
        {children}
      </ScrollView>

      {showScrollToBottom && (
        <Pressable
          accessibilityLabel="Scroll to latest message"
          onPress={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
          style={styles.fab}
        >
          <Image
            source={require("../../assets/images/arrow-down.png")}
            style={styles.fabIcon}
          />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  contentContainer: {
    padding: 16,
  },
  fab: {
    position: "absolute",
    bottom: 8,
    alignSelf: "center",
    borderRadius: 100,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 8.5,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
  },
  fabIcon: {
    width: 18,
    height: 18,
  },
});
