import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";

import famousPeople from "../data/famousPeople";

import colors from "../styles/Colors";
import typography from "../styles/Typography";

import SectionTitle from "./SectionTitle";

export default function FamousPeople() {
  return (
    <View style={styles.container}>
      <SectionTitle title="FAMOUS PEOPLE" />

      <View style={styles.grid}>
        {famousPeople.map((person) => (
          <View
            key={person.id}
            style={styles.card}
          >
            <Image
              source={person.image}
              style={styles.image}
            />

            <View style={styles.info}>
              <Text style={styles.name}>
                {person.name}
              </Text>

              <Text style={styles.description}>
                {person.description}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingHorizontal: 24,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    marginBottom: 30,
    backgroundColor: colors.glass,
    borderRadius: 24,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.glassBorder,
  },

  image: {
    width: "100%",
    height: 220,
  },

  info: {
    padding: 18,
  },

  name: {
    ...typography.cardTitle,
    color: colors.white,
    fontSize: 20,
    marginBottom: 12,
  },

  description: {
    ...typography.smallText,
    color: colors.lightGray,
    lineHeight: 22,
  },
});