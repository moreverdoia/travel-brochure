import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import colors from "../styles/Colors";
import typography from "../styles/Typography";

export default function SectionTitle({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>

      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 50,
  },

  title: {
    ...typography.sectionTitle,
    color: colors.white,
    marginBottom: 18,
  },

  line: {
    width: 80,
    height: 1,
    backgroundColor: colors.gold,
  },
});