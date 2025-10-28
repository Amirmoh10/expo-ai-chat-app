import React, { useRef, useState } from "react";
import {
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

interface ConversationProps {
  children: React.ReactNode;
}

export function Conversation({ children }: ConversationProps) {
  const scrollViewRef = useRef<ScrollView>(null);
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);
  const isAtBottomRef = useRef(true);
  const layoutHeightRef = useRef(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const distanceFromBottom =
      contentSize.height - (layoutMeasurement.height + contentOffset.y);
    const isAtBottom = distanceFromBottom <= 24;

    layoutHeightRef.current = layoutMeasurement.height;
    isAtBottomRef.current = isAtBottom;

    const hasOverflow = contentSize.height > layoutMeasurement.height + 1;
    setShowScrollToBottom(!isAtBottom && hasOverflow);
  };

  const handleContentSizeChange = (
    _contentWidth: number,
    contentHeight: number
  ) => {
    const layoutHeight = layoutHeightRef.current;
    const hasOverflow = layoutHeight > 0 && contentHeight > layoutHeight + 1;

    if (!hasOverflow) {
      isAtBottomRef.current = true;
      setShowScrollToBottom(false);
      return;
    }

    if (isAtBottomRef.current) {
      // Content grew while we were pinned to the bottom; show the scroll to bottom button.
      isAtBottomRef.current = false;
      setShowScrollToBottom(true);
    } else {
      setShowScrollToBottom(true);
    }
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView
        ref={scrollViewRef}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
        onScroll={handleScroll}
        onLayout={(event) => {
          layoutHeightRef.current = event.nativeEvent.layout.height;
        }}
        onContentSizeChange={handleContentSizeChange}
        scrollEventThrottle={16}
      >
        {children}
      </ScrollView>

      {showScrollToBottom && (
        <Pressable
          accessibilityLabel="Scroll to latest message"
          onPress={() => {
            scrollViewRef.current?.scrollToEnd({ animated: true });
            isAtBottomRef.current = true;
            setShowScrollToBottom(false);
          }}
          style={styles.fab}
        >
          <Image
            source={require("@/assets/images/arrow-down.png")}
            style={styles.scrollToBottomIcon}
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
    paddingVertical: 16,
    paddingHorizontal: 20,
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
  scrollToBottomIcon: {
    width: 18,
    height: 18,
  },
});
