import React from "react";

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import colors from "../styles/Colors";
import typography from "../styles/Typography";

export default function HistorySection() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Images/Hero/beach-hero.jpg")}
        style={styles.image}
        resizeMode="cover"
      >
        <LinearGradient
          colors={[
            "rgba(0,0,0,0.15)",
            "rgba(0,0,0,0.75)",
          ]}
          style={styles.overlay}
        >
          <View style={styles.card}>
            <Text style={styles.title}>
              HISTORY
            </Text>

            <Text style={styles.description}>
              Puerto Rico is a Caribbean island with a
              rich cultural history influenced by Spanish,
              African and Taíno traditions.
            </Text>

            <Text style={styles.description}>
              Tourists should explore Old San Juan to
              understand the island’s history and culture.
            </Text>

            <Text style={styles.description}>
              Visitors shouldn’t ignore local traditions,
              music and cuisine because they are an
              essential part of Puerto Rican identity.
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 160,
  },

  image: {
    width: "100%",
    minHeight: 700,
    justifyContent: "center",
  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 80,
  },

  card: {
    backgroundColor: colors.glass,
    borderWidth: 1,
    borderColor: colors.glassBorder,
    borderRadius: 28,
    padding: 28,
    backdropFilter: "blur(10px)",
  },

  title: {
    ...typography.sectionTitle,
    color: colors.white,
    marginBottom: 24,
  },

  description: {
    ...typography.lightBody,
    color: colors.white,
    marginBottom: 20,
  },
});