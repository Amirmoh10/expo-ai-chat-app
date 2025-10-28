import React, { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet } from "react-native";

export function LoadingIndicator() {
  const opacityRef = useRef(new Animated.Value(0.4));

  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(opacityRef.current, {
          toValue: 1,
          duration: 600,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(opacityRef.current, {
          toValue: 0.4,
          duration: 600,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );

    pulse.start();

    return () => {
      pulse.stop();
      opacityRef.current.stopAnimation();
    };
  }, []);

  return (
    <Animated.Text style={[styles.indicator, { opacity: opacityRef.current }]}>
      {"\u2022"}
    </Animated.Text>
  );
}

const styles = StyleSheet.create({
  indicator: {
    color: "#000000",
    fontFamily: "Inter_500Medium",
    fontSize: 20,
    lineHeight: 32,
    letterSpacing: 0.14,
  },
});
