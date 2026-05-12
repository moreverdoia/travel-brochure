import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import colors from "../styles/Colors";
import typography from "../styles/Typography";

import SectionTitle from "./SectionTitle";

export default function MusicPreview() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SectionTitle title="MUSIC" />

      <Text style={styles.text}>
        Explore the rhythm of Puerto Rico through salsa, reggaeton and jíbara music.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Music")}
      >
        <Text style={styles.buttonText}>
          EXPLORE MUSIC →
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingHorizontal: 24,
    alignItems: "center",
  },

  text: {
    ...typography.body,
    color: colors.white,
    textAlign: "center",
    marginBottom: 30,
  },

  button: {
    borderWidth: 1,
    borderColor: colors.gold,
    borderRadius: 50,
    paddingVertical: 16,
    paddingHorizontal: 28,
  },

  buttonText: {
    ...typography.buttonText,
    color: colors.gold,
  },
});