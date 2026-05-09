import React from "react";

import {
  View,
  Text,
 StyleSheet,
} from "react-native";

import colors from "../styles/Colors";
import typography from "../styles/Typography";

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.line} />

      <Text style={styles.title}>
        PUERTO RICO
      </Text>

      <Text style={styles.subtitle}>
        Travel with respect, explore with curiosity.
      </Text>

      <Text style={styles.advice}>
        Tourists should respect local culture,
        traditions and natural spaces.
      </Text>

      <Text style={styles.credit}>
        Made with love from More to Vir (and Bad Bunny)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 120,
    paddingTop: 50,
    paddingBottom: 80,
    paddingHorizontal: 24,
    alignItems: "center",
  },

  line: {
    width: 120,
    height: 1,
    backgroundColor: colors.gold,
    marginBottom: 32,
  },

  title: {
    ...typography.sectionTitle,
    color: colors.white,
    fontSize: 28,
    marginBottom: 18,
  },

  subtitle: {
    ...typography.lightBody,
    color: colors.gold,
    textAlign: "center",
    marginBottom: 20,
  },

  advice: {
    ...typography.smallText,
    color: colors.lightGray,
    textAlign: "center",
    lineHeight: 24,
    maxWidth: 500,
    marginBottom: 40,
  },

  credit: {
    ...typography.smallText,
    color: "rgba(255,255,255,0.45)",
    letterSpacing: 1,
    textTransform: "uppercase",
    fontSize: 10,
  },
});