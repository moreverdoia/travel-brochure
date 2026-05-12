import React, { useState, useRef } from "react";

import {
  ScrollView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from "react-native";

import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";

import HistorySection from "../components/HistorySection";
import ColonialContextSection from "../components/ColonialContextSection";
import FoodCarousel from "../components/FoodCarousel";
import QuoteSection from "../components/QuoteSection";
import MusicPreview from "../components/MusicPreview";
import CulturePreview from "../components/CulturePreview";
import FamousPeople from "../components/FamousPeople";
import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";

import colors from "../styles/Colors";

export default function HomeScreen() {
  const navigation = useNavigation();
  const scrollRef = useRef(null);

  // 🔥 floating search
  const [showFloatingSearch, setShowFloatingSearch] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // 🔥 refs de secciones
  const refs = {
    history: useRef(null),
    colonial: useRef(null),
    food: useRef(null),
    quote: useRef(null),
    music: useRef(null),
    culture: useRef(null),
    people: useRef(null),
  };

  const handleSearch = (text) => {
    const value = text.toLowerCase().trim();

    let targetRef = null;

    if (value.includes("food")) targetRef = refs.food;
    else if (value.includes("music")) targetRef = refs.music;
    else if (value.includes("culture")) targetRef = refs.culture;
    else if (value.includes("history")) targetRef = refs.history;
    else if (value.includes("people")) targetRef = refs.people;
    else if (value.includes("colonial")) targetRef = refs.colonial;
    else if (value.includes("quote")) targetRef = refs.quote;

    if (targetRef?.current && scrollRef.current) {
      targetRef.current.measureLayout(
        scrollRef.current,
        (x, y) => {
          scrollRef.current.scrollTo({
            y: y - 20,
            animated: true,
          });
        }
      );
    }

    if (value === "advices") {
      navigation.navigate("Advices");
      return;
    }

    // 🔥 cerrar sticky después de buscar
    setExpanded(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={(event) => {
          const y = event.nativeEvent.contentOffset.y;

          // 🔥 aparece después de HistorySection
          if (y > 1150) {
            setShowFloatingSearch(true);
          } else {
            setShowFloatingSearch(false);
            setExpanded(false);
          }
        }}
      >

        <HeroSection />

        {/* 🔥 SEARCH NORMAL */}
        <SearchBar
          onSearch={handleSearch}
        />

        {/* HISTORY */}
        <View ref={refs.history}>
          <HistorySection />
        </View>

        {/* COLONIAL */}
        <View ref={refs.colonial}>
          <ColonialContextSection />
        </View>

        {/* FOOD */}
        <View ref={refs.food}>
          <FoodCarousel />
        </View>

        {/* QUOTE */}
        <View ref={refs.quote}>
          <QuoteSection />
        </View>

        {/* MUSIC */}
        <View ref={refs.music}>
          <MusicPreview />
        </View>

        {/* CULTURE */}
        <View ref={refs.culture}>
          <CulturePreview />
        </View>

        {/* PEOPLE */}
        <View ref={refs.people}>
          <FamousPeople />
        </View>

        <Footer />

      </ScrollView>

      {/* 🔥 FLOATING SEARCH */}
      {showFloatingSearch && (
        <View style={styles.floatingContainer}>

          {expanded ? (
            <SearchBar style={styles.searchBarFloating}
              onSearch={handleSearch}
              floating
            />
          ) : (
            <TouchableOpacity
              style={styles.searchButton}
              onPress={() => setExpanded(true)}
            >
              <Text style={styles.searchIcon}>
                🔍
              </Text>
            </TouchableOpacity>
          )}

        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // 🔥 sticky search
  floatingContainer: {
    position: "absolute",
    top: 60,
    right: 20,
    left: 20,
    zIndex: 999,
  },

  searchButton: {
    width: 55,
    height: 55,
    borderRadius: 999,
    backgroundColor: "rgba(0,0,0,0.85)",

    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",

    borderWidth: 1,
    borderColor: "#C6A769",
  },

  searchIcon: {
    fontSize: 22,
  },
});