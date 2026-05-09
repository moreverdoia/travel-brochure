import React from "react";
import HistorySection from "../components/HistorySection";
import ColonialContextSection from "../components/ColonialContextSection";
import FoodCarousel from "../components/FoodCarousel";
import QuoteSection from "../components/QuoteSection";
import MusicPreview from "../components/MusicPreview";
import CulturePreview from "../components/CulturePreview";
import FamousPeople from "../components/FamousPeople";
import Footer from "../components/Footer";

import {
  ScrollView,
  StyleSheet,
  View,
  StatusBar,
} from "react-native";

import HeroSection from "../components/HeroSection";

import colors from "../styles/Colors";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <HeroSection />
        <HistorySection />
        <ColonialContextSection />
        <FoodCarousel />
        <QuoteSection />
        <MusicPreview />
        <CulturePreview />
        <FamousPeople />
        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});