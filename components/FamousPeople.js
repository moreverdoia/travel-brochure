import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";

import famousPeople from "../data/famousPeople";

import colors from "../styles/Colors";
import typography from "../styles/Typography";

import SectionTitle from "./SectionTitle";

export default function FamousPeople() {
  const renderPerson = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={item.image}
        style={styles.image}
      />

      <View style={styles.info}>
        <Text style={styles.name}>
          {item.name}
        </Text>

        <Text style={styles.description}>
          {item.description}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionTitle title="FAMOUS PEOPLE" />

      <FlatList
        data={famousPeople}
        renderItem={renderPerson}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.grid}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingHorizontal: 24,
  },

  grid: {
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