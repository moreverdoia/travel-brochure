import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import colors from "../styles/Colors";
import typography from "../styles/Typography";

import SectionTitle from "./SectionTitle";

export default function ColonialContextSection() {
  return (
    <View style={styles.container}>
      <SectionTitle title="HISTORICAL CONTEXT" />

      <Text style={styles.text}>
        Puerto Rico has a complex colonial history. It was a Spanish colony for over 400 years
        before being ceded to the United States in 1898 after the Spanish-American War.
      </Text>

      <Text style={styles.text}>
        Today, Puerto Rico remains an unincorporated territory of the United States, which means
        it is governed by U.S. federal laws but does not have full political representation.
      </Text>

      <Text style={styles.text}>
        This situation has influenced the island’s identity, culture and economy, creating an
        ongoing debate about its political future.
      </Text>

      <Text style={styles.advice}>
        Tourists should be aware of this history and respect local perspectives when visiting.
      </Text>

      <Text style={styles.warning}>
        Visitors shouldn’t assume Puerto Rico is simply “part of the U.S.” without cultural nuance.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    paddingHorizontal: 24,
  },

  text: {
    ...typography.body,
    color: colors.white,
    marginBottom: 16,
    lineHeight: 26,
  },

  advice: {
    ...typography.smallText,
    color: colors.gold,
    marginTop: 20,
    marginBottom: 10,
  },

  warning: {
    ...typography.smallText,
    color: "#FF6B6B",
    marginBottom: 30,
  },
});