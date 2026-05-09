import React from "react";

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import colors from "../styles/Colors";
import typography from "../styles/Typography";

const { height } = Dimensions.get("window");

export default function HeroSection() {
  return (
    <ImageBackground
      source={require("../assets/Images/Hero/puerto-rico-flag.jpg")}
      style={styles.container}
      resizeMode="cover"
    >
      <LinearGradient
        colors={[
          "rgba(0,0,0,0.75)",
          "rgba(0,0,0,0.35)",
          "rgba(0,0,0,0.85)",
        ]}
        style={styles.overlay}
      >
        <View style={styles.content}>
          <Text style={styles.title}>
            PUERTO{"\n"}RICO
          </Text>

          <View style={styles.line} />

          <Text style={styles.subtitle}>
            a simple travel brochure
          </Text>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: "100%",
    justifyContent: "center",
  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  content: {
    alignItems: "center",
  },

  title: {
    ...typography.heroTitle,
    color: colors.white,
    textAlign: "center",
  },

  line: {
    width: 90,
    height: 1,
    backgroundColor: colors.gold,
    marginVertical: 24,
  },

  subtitle: {
    ...typography.heroSubtitle,
    color: colors.gold,
    textTransform: "uppercase",
  },
});