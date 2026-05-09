import React from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

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

          <Text style={styles.artist}>Recommended: Willie Colón, Héctor Lavoe</Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quote}>
              “Que no tiene certeza y nunca te da{"\n"}
              Que no tiene concepto, y nunca tendrá”
            </Text>
            <Text style={styles.subtitle}>
              Willie Colón - Oh, qué será?
            </Text>
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

          <Text style={styles.artist}>Recommended: Bad Bunny, Daddy Yankee, Ivy Queen</Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quote}>
              “Salimo de la calle y del ghetto, y el respeto lo implantamo{"\n"}
              En la disco están volando las paca'{"\n"}
              Y al que no le guste, lo sacamo (tú sabe)”
            </Text>
            <Text style={styles.subtitle}>
              Tito el Bambino - La Gerencia
            </Text>
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

          <Text style={styles.artist}>Recommended: Rafael Cepeda</Text>

          <View style={styles.quoteBox}>
            <Text style={styles.quote}>
              Se oye al jíbaro llorando, otro má que se marchó {"\n"}
              No quería irse pa Orlando, pero el corrupto lo echó
            </Text>
            <Text style={styles.subtitle}>
              Bad Bunny - LO QUE LE PASÓ A HAWAii
            </Text>
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

  subtitle: {
    ...typography.heroSubtitle,
    color: colors.gold,
    textTransform: "uppercase",
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

  quoteBox: {
    backgroundColor: "rgba(255,255,255,0.08)",
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },

  quote: {
    ...typography.lightBody,
    color: colors.white,
    fontStyle: "italic",
  },
});