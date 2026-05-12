import React from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import AudioCard from "../components/AudioCard";

import colors from "../styles/Colors";
import typography from "../styles/Typography";

export default function MusicScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* SALSA */}
      <ImageBackground
        source={require("../assets/Images/Music/salsa.jpg")}
        style={styles.section}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.85)"]}
          style={styles.overlay}
        >
          <Text style={styles.title}>SALSA</Text>

          <Text style={styles.text}>
            Salsa is one of Puerto Rico’s most iconic genres, mixing Afro-Caribbean rhythms.
          </Text>

          <Text style={styles.artist}>
            Recommended: Willie Colón, Héctor Lavoe
          </Text>

          <View>
            <AudioCard
              id="salsa"   // 🔥 AQUÍ
              title="Un Verano En Nueva York"
              file={require("../assets/Audio/salsa.mp3")}
            />
          </View>
        </LinearGradient>
      </ImageBackground>

      {/* REGGAETON */}
      <ImageBackground
        source={require("../assets/Images/Music/reggaeton.jpg")}
        style={styles.section}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.85)"]}
          style={styles.overlay}
        >
          <Text style={styles.title}>REGGAETON</Text>

          <Text style={styles.text}>
            Born in the streets of Puerto Rico, reggaeton became a global movement.
          </Text>

          <Text style={styles.artist}>
            Recommended: Bad Bunny, Daddy Yankee, Ivy Queen
          </Text>

          <View>
            <AudioCard
              id="reggaeton"  // 🔥 AQUÍ
              title="Gasolina"
              file={require("../assets/Audio/reggaeton.mp3")}
            />
          </View>
        </LinearGradient>
      </ImageBackground>

      {/* JÍBARA */}
      <ImageBackground
        source={require("../assets/Images/Music/jibara.jpg")}
        style={styles.section}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.85)"]}
          style={styles.overlay}
        >
          <Text style={styles.title}>JÍBARA MUSIC</Text>

          <Text style={styles.text}>
            Traditional Puerto Rican folk music that represents rural life and identity.
          </Text>

          <Text style={styles.artist}>
            Recommended: Rafael Cepeda
          </Text>

          <View>
            <AudioCard
              id="jibara"  // 🔥 AQUÍ
              title="Lo que le pasó a Hawaii"
              file={require("../assets/Audio/jibara.mp3")}
            />
          </View>
        </LinearGradient>
      </ImageBackground>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  section: {
    height: 600,
    justifyContent: "center",
  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },

  title: {
    ...typography.sectionTitle,
    color: colors.white,
    marginBottom: 12,
  },

  text: {
    ...typography.body,
    color: colors.white,
    marginBottom: 10,
  },

  artist: {
    ...typography.smallText,
    color: colors.gold,
    marginBottom: 20,
  },
});