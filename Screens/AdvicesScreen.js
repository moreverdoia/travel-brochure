import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import colors from "../styles/Colors";
import typography from "../styles/Typography";

const sections = [
  {
    title: "FOOD",
    subtitle: "",
    advice: [
      "Try local food spots instead of tourist chains.",
      "Do not leave without trying mofongo.",
      "Street food is part of Puerto Rican culture.",
      "Ask locals where they actually eat.",
    ],
  },

  {
    title: "MUSIC",
    subtitle: "",
    advice: [
      "Reggaeton was born in Puerto Rico.",
      "Salsa is deeply tied to identity.",
      "Music is everywhere: beaches, cars, streets, homes.",
      "Listen beyond mainstream playlists.",
    ],
  },

  {
    title: "LOCAL SPOTS",
    subtitle: "",
    advice: [
      "Some of the best beaches are less known.",
      "Support local cafés and businesses.",
      "Old San Juan is beautiful, but not the whole island.",
      "Ask locals about hidden places.",
    ],
  },

  {
    title: "SLANG",
    subtitle: "",
    advice: [
      "Wepa = excitement or celebration.",
      "Janguear = hanging out.",
      "Brutal = awesome.",
      "Boricua = Puerto Rican identity.",
    ],
  },

  {
    title: "ISLAND REALITY",
    subtitle: "",
    advice: [
      "Puerto Rico faces economic and political struggles.",
      "Many locals are affected by gentrification.",
      "Blackouts and infrastructure problems still exist.",
      "Tourism impacts daily local life.",
    ],
  },

  {
    title: "UNWRITTEN RULES",
    subtitle: "",
    advice: [
      "Food is part of conversation.",
      "Music is never just background noise.",
      "If someone invites you to dance, dance.",
      "Respect matters more than perfect Spanish.",
    ],
  },

  {
    title: "NEVER DO",
    subtitle: "",
    advice: [
      "Do not call Puerto Rico 'just another US island'.",
      "Do not disrespect reggaeton culture.",
      "Do not treat locals like resort workers.",
      "Do not ignore the island’s history.",
    ],
  },

  {
    title: "ESSENTIALS",
    subtitle: "",
    advice: [
      "Puerto Rico is more than a vacation destination.",
      "Support local culture whenever possible.",
      "Learn the history behind the beauty.",
      "Respect the island like people live there — because they do.",
    ],
  },
];

export default function AdvicesScreen() {
  const [selected, setSelected] = useState(null);

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        LOCAL ADVICES
      </Text>

      <Text style={styles.subtitle}>
        A hidden guide for people who truly want to understand Puerto Rico.
      </Text>

      <View style={styles.grid}>
        {sections.map((section) => (
          <TouchableOpacity
            key={section.title}
            style={styles.card}
            onPress={() => setSelected(section)}
          >

            <LinearGradient
              colors={[
                "rgba(255,255,255,0.08)",
                "rgba(255,255,255,0.02)",
              ]}
              style={styles.cardGradient}
            >

              <Text style={styles.cardTitle}>
                {section.title}
              </Text>

              <Text style={styles.cardSubtitle}>
                {section.subtitle}
              </Text>

            </LinearGradient>

          </TouchableOpacity>
        ))}
      </View>

      {/* 🔥 MODAL */}
      <Modal
        visible={!!selected}
        transparent
        animationType="fade"
      >
        <View style={styles.modalOverlay}>

          <View style={styles.modalContent}>

            <Text style={styles.modalTitle}>
              {selected?.title}
            </Text>

            <Text style={styles.modalSubtitle}>
              {selected?.subtitle}
            </Text>

            <ScrollView
              showsVerticalScrollIndicator={false}
            >
              {selected?.advice.map((item, index) => (
                <View
                  key={index}
                  style={styles.adviceCard}
                >
                  <Text style={styles.advice}>
                    • {item}
                  </Text>
                </View>
              ))}
            </ScrollView>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setSelected(null)}
            >
              <Text style={styles.closeText}>
                CLOSE
              </Text>
            </TouchableOpacity>

          </View>

        </View>
      </Modal>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 120,
    paddingHorizontal: 24,
  },

  title: {
    ...typography.sectionTitle,
    color: colors.white,
    textAlign: "center",
    marginBottom: 12,
  },

  subtitle: {
    ...typography.body,
    color: colors.gold,
    textAlign: "center",
    marginBottom: 50,
    lineHeight: 28,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: 100,
  },

  card: {
    width: "47%",
    height: 170,
    marginBottom: 18,
    borderRadius: 28,
    overflow: "hidden",
  },

  cardGradient: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 18,

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",

    backgroundColor: "rgba(255,255,255,0.04)",
  },

  cardTitle: {
    color: colors.white,
    fontSize: 22,
    marginBottom: 8,
    letterSpacing: 1,
  },

  cardSubtitle: {
    color: colors.gold,
    fontSize: 13,
    lineHeight: 20,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",

    justifyContent: "center",
    alignItems: "center",

    padding: 24,
  },

  modalContent: {
    width: "100%",
    maxHeight: "75%",

    backgroundColor: "#0E0E0E",

    borderRadius: 30,

    padding: 24,

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },

  modalTitle: {
    ...typography.sectionTitle,
    color: colors.gold,
    marginBottom: 8,
  },

  modalSubtitle: {
    color: colors.white,
    opacity: 0.7,
    marginBottom: 24,
    lineHeight: 22,
  },

  adviceCard: {
    backgroundColor: "rgba(255,255,255,0.04)",

    borderRadius: 20,

    padding: 16,

    marginBottom: 14,

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },

  advice: {
    ...typography.body,
    color: colors.white,
    lineHeight: 28,
  },

  closeButton: {
    marginTop: 20,

    borderWidth: 1,
    borderColor: colors.gold,

    borderRadius: 999,

    paddingVertical: 14,

    alignItems: "center",
  },

  closeText: {
    color: colors.gold,
    letterSpacing: 2,
  },
});