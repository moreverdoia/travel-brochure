import React from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

import colors from "../styles/Colors";
import typography from "../styles/Typography";

export default function CultureScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.title}>
            CULTURE GUIDE
          </Text>

          <Text style={styles.subtitle}>
            Explore Puerto Rico through places, food and traditions
          </Text>
        </View>

        {/* ICONIC PLACES */}
        <Text style={styles.sectionTitle}>
          ICONIC PLACES
        </Text>

        <Image
          source={require("../assets/Images/Culture/old-san-juan.jpg")}
          style={styles.image}
        />

        <Text style={styles.text}>
          Old San Juan is a historic city full of colorful streets and Spanish architecture.
        </Text>

        <Text style={styles.advice}>
          You should walk around in the afternoon for the best views.
        </Text>

        {/* BEACHES */}
        <Text style={styles.sectionTitle}>
          BEST BEACHES
        </Text>

        <Image
          source={require("../assets/Images/Culture/flamenco-beach.jpg")}
          style={styles.image}
        />

        <Text style={styles.text}>
          Flamenco Beach is considered one of the most beautiful beaches in the world.
        </Text>

        <Text style={styles.advice}>
          Tourists should bring sunscreen and stay hydrated.
        </Text>

        <Text style={styles.warning}>
          You shouldn’t leave trash or damage natural areas.
        </Text>

        {/* LA PERLA */}
        <Text style={styles.sectionTitle}>
          LA PERLA
        </Text>

        <Image
          source={require("../assets/Images/Culture/la-perla.jpg")}
          style={styles.image}
        />

        <Text style={styles.text}>
          La Perla is a coastal neighborhood known for its culture, music and history.
        </Text>

        <Text style={styles.advice}>
          You should visit with respect and open mind.
        </Text>

        {/* FOOD CULTURE */}
        <Text style={styles.sectionTitle}>
          FOOD CULTURE
        </Text>

        <Image
          source={require("../assets/Images/Food/mofongo.jpg")}
          style={styles.image}
        />

        <Text style={styles.text}>
          Puerto Rican cuisine mixes African, Spanish and Caribbean influences.
        </Text>

        <Text style={styles.advice}>
          You must try mofongo and local street food.
        </Text>

        <Text style={styles.warning}>
          You shouldn’t ignore local recommendations.
        </Text>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  header: {
    padding: 24,
    paddingTop: 80,
  },

  title: {
    ...typography.sectionTitle,
    color: colors.white,
    textAlign: "center",
    marginBottom: 12,
  },

  subtitle: {
    ...typography.lightBody,
    color: colors.lightGray,
    textAlign: "center",
  },

  sectionTitle: {
    ...typography.cardTitle,
    color: colors.gold,
    marginTop: 40,
    marginBottom: 16,
    paddingHorizontal: 24,
  },

  image: {
    width: "100%",
    height: 220,
    borderRadius: 20,
    marginBottom: 12,
  },

  text: {
    ...typography.body,
    color: colors.white,
    paddingHorizontal: 24,
    marginBottom: 10,
  },

  advice: {
    ...typography.smallText,
    color: colors.gold,
    paddingHorizontal: 24,
    marginBottom: 10,
  },

  warning: {
    ...typography.smallText,
    color: "#FF6B6B",
    paddingHorizontal: 24,
    marginBottom: 20,
  },
});