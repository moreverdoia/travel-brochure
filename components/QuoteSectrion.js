import React from "react";

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";

import colors from "../styles/Colors";
import typography from "../styles/Typography";
import { LinearGradient } from "expo-linear-gradient";

export default function QuoteSection() {
  return (
      <LinearGradient
        colors={[
          "rgba(0,0,0,0.75)",
          "rgba(0,0,0,0.82)",
        ]}
        style={styles.overlay}
      >
        <View style={styles.content}>
          <Text style={styles.quote}>
            “Estás escuhando música de Puerto Rico, cabrón.”
          </Text>

          <View style={styles.line} />

          <Text style={styles.author}>
            — Bad Bunny - "EoO"
          </Text>
        </View>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 500,
    marginTop: 500,
    justifyContent: "center",
  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 80,
  },

  content: {
    maxWidth: 700,
    alignItems: "center",
  },

  quote: {
    ...typography.quote,
    color: colors.white,
    textAlign: "center",
    marginBottom: 32,
    marginTop: 200,
  },

  line: {
    width: 100,
    height: 1,
    backgroundColor: colors.gold,
    marginBottom: 28,
  },

  author: {
    ...typography.smallText,
    color: colors.gold,
    textTransform: "uppercase",
    letterSpacing: 3,
  },
});