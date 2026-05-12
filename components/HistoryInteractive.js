import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";

import colors from "../styles/Colors";
import typography from "../styles/Typography";

export default function HistoryInteractive() {
  const [selected, setSelected] = useState(null);

  const data = [
    {
      year: "1493",
      title: "Spanish Colonization",
      text:
        "Spain colonized Puerto Rico, influencing its language, architecture and culture for over 400 years.",
    },
    {
      year: "1898",
      title: "United States Control",
      text:
        "Puerto Rico became a territory of the United States after the Spanish-American War.",
    },
    {
      year: "Today",
      title: "Modern Identity",
      text:
        "Puerto Rico remains a U.S. territory with a strong cultural identity and ongoing political debate.",
    },
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        HISTORY
      </Text>

      <View style={styles.row}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.pill}
            onPress={() => setSelected(item)}
          >
            <Text style={styles.year}>
              {item.year}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* MODAL */}
      <Modal
        visible={selected !== null}
        transparent
        animationType="fade"
      >
        <View style={styles.modalBg}>
          <View style={styles.modalCard}>

            {selected && (
              <>
                <Text style={styles.modalTitle}>
                  {selected.title}
                </Text>

                <Text style={styles.modalText}>
                  {selected.text}
                </Text>

                <TouchableOpacity
                  onPress={() => setSelected(null)}
                  style={styles.closeBtn}
                >
                  <Text style={styles.closeText}>
                    CLOSE
                  </Text>
                </TouchableOpacity>
              </>
            )}

          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    paddingHorizontal: 24,
  },

  title: {
    ...typography.sectionTitle,
    color: colors.white,
    marginBottom: 30,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  pill: {
    borderWidth: 1,
    borderColor: colors.gold,
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: "rgba(255,255,255,0.05)",
  },

  year: {
    ...typography.smallText,
    color: colors.gold,
    letterSpacing: 2,
  },

  modalBg: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  modalCard: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "rgba(20,20,20,0.95)",
    borderRadius: 25,
    padding: 24,
    borderWidth: 1,
    borderColor: colors.glassBorder,
  },

  modalTitle: {
    ...typography.cardTitle,
    color: colors.white,
    marginBottom: 15,
  },

  modalText: {
    ...typography.body,
    color: colors.lightGray,
    marginBottom: 20,
  },

  closeBtn: {
    borderWidth: 1,
    borderColor: colors.gold,
    borderRadius: 40,
    padding: 12,
    alignItems: "center",
  },

  closeText: {
    ...typography.buttonText,
    color: colors.gold,
  },
});