import React from "react";

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { LinearGradient } from "expo-linear-gradient";

import colors from "../styles/Colors";
import typography from "../styles/Typography";

import SectionTitle from "./SectionTitle";

export default function CulturePreview() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SectionTitle title="CULTURE" />

      <ImageBackground
        source={require("../assets/Images/Culture/old-san-juan.jpg")}
        style={styles.image}
        resizeMode="cover"
      >
        <LinearGradient
          colors={[
            "rgba(0,0,0,0.20)",
            "rgba(0,0,0,0.82)",
          ]}
          style={styles.overlay}
        >
          <View style={styles.content}>
            <Text style={styles.description}>
              Puerto Rico is full of colorful streets,
              tropical beaches, music, art and unforgettable
              cultural experiences.
            </Text>

            <Text style={styles.advice}>
              Tourists should explore local neighborhoods,
              try traditional food and respect cultural traditions.
            </Text>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.button}
              onPress={() => navigation.navigate("Culture")}
            >
              <Text style={styles.buttonText}>
                EXPLORE CULTURE →
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },

  image: {
    width: "100%",
    minHeight: 650,
    justifyContent: "flex-end",
  },

  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 30,
  },

  content: {
    maxWidth: 500,
  },

  description: {
    ...typography.lightBody,
    color: colors.white,
    marginBottom: 24,
  },

  advice: {
    ...typography.body,
    color: colors.gold,
    marginBottom: 36,
  },

  button: {
    borderWidth: 1,
    borderColor: colors.gold,
    borderRadius: 50,
    paddingVertical: 16,
    paddingHorizontal: 28,
    alignSelf: "flex-start",
    backgroundColor: "rgba(255,255,255,0.05)",
  },

  buttonText: {
    ...typography.buttonText,
    color: colors.gold,
  },
});