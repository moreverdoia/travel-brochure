import React, { useEffect, useRef } from "react";
import { View, Animated, StyleSheet } from "react-native";

export default function AudioVisualizer({ isPlaying }) {
  // 🔥 IMPORTANTE: hooks NO dentro de map directo sin estabilidad
  const bars = useRef(
    Array.from({ length: 5 }).map(() => new Animated.Value(1))
  ).current;

  useEffect(() => {
    let animations = [];

    if (!isPlaying) {
      bars.forEach((bar) => {
        bar.stopAnimation();
        Animated.timing(bar, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start();
      });

      return;
    }

    animations = bars.map((bar, i) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(bar, {
            toValue: 2.2,
            duration: 300 + i * 80,
            useNativeDriver: true,
          }),
          Animated.timing(bar, {
            toValue: 0.8,
            duration: 300,
            useNativeDriver: true,
          }),
        ])
      )
    );

    animations.forEach((anim) => anim.start());

    return () => {
      animations.forEach((anim) => anim.stop());
    };
  }, [isPlaying]);

  return (
    <View style={styles.container}>
      {bars.map((bar, i) => (
        <Animated.View
          key={i}
          style={[
            styles.bar,
            {
              transform: [{ scaleY: bar }],
            },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginTop: 10,
    gap: 4,
  },

  bar: {
    width: 4,
    height: 20,
    backgroundColor: "#C6A769",
    borderRadius: 2,
  },
});