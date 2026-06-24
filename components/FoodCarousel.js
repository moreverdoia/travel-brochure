import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  Modal,
} from "react-native";

import { BlurView } from "expo-blur";

import foods from "../data/Foods";

import colors from "../styles/Colors";
import typography from "../styles/Typography";

import SectionTitle from "./SectionTitle";

export default function FoodCarousel() {
  const [selectedFood, setSelectedFood] = useState(null);

  return (
    <View style={styles.container}>
      <SectionTitle title="FOOD" />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {foods.map((food) => (
          <Pressable
            key={food.id}
            onPress={() => setSelectedFood(food)}
            style={({ pressed }) => [
              styles.card,
              pressed && { opacity: 0.85 },
            ]}
          >
            <Image
              source={food.image}
              style={styles.image}
            />

            <View style={styles.foodInfo}>
              <Text style={styles.foodName}>
                {food.name}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>

      <Modal
        visible={selectedFood !== null}
        transparent
        animationType="fade"
      >
        <BlurView
          intensity={40}
          tint="dark"
          style={styles.modalContainer}
        >
          <View style={styles.modalCard}>
            {selectedFood && (
              <>
                <Image
                  source={selectedFood.image}
                  style={styles.modalImage}
                />

                <Text style={styles.modalTitle}>
                  {selectedFood.name}
                </Text>

                <Text style={styles.modalText}>
                  <Text style={styles.bold}>
                    Ingredients:
                  </Text>{" "}
                  {selectedFood.ingredients}
                </Text>

                <Text style={styles.modalText}>
                  <Text style={styles.bold}>
                    Origin:
                  </Text>{" "}
                  {selectedFood.origin}
                </Text>

                <Text style={styles.modalAdvice}>
                  {selectedFood.advice}
                </Text>

                <Pressable
                  style={styles.closeButton}
                  onPress={() => setSelectedFood(null)}
                >
                  <Text style={styles.closeText}>
                    CLOSE
                  </Text>
                </Pressable>
              </>
            )}
          </View>
        </BlurView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
  },

  scrollContent: {
    paddingLeft: 24,
    paddingRight: 8,
  },

  card: {
    width: 250,
    marginRight: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 250,
  },

  foodInfo: {
    padding: 20,
  },

  foodName: {
    ...typography.cardTitle,
    color: "#111111",
    textAlign: "center",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  modalCard: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "rgba(20,20,20,0.92)",
    borderRadius: 30,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.glassBorder,
  },

  modalImage: {
    width: "100%",
    height: 260,
  },

  modalTitle: {
    ...typography.sectionTitle,
    color: colors.white,
    fontSize: 28,
    paddingHorizontal: 24,
    paddingTop: 24,
    marginBottom: 20,
  },

  modalText: {
    ...typography.body,
    color: colors.lightGray,
    paddingHorizontal: 24,
    marginBottom: 16,
  },

  bold: {
    fontFamily: "MontserratSemiBold",
    color: colors.white,
  },

  modalAdvice: {
    ...typography.lightBody,
    color: colors.gold,
    paddingHorizontal: 24,
    marginTop: 10,
    marginBottom: 30,
  },

  closeButton: {
    marginHorizontal: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: colors.gold,
    borderRadius: 50,
    paddingVertical: 14,
    alignItems: "center",
  },

  closeText: {
    ...typography.buttonText,
    color: colors.gold,
  },
});