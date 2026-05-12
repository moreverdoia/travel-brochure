import React, { useState, useEffect, useRef } from "react";

import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Keyboard,
  Animated,
} from "react-native";

export default function SearchBar({ onSearch, floating }) {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const data = ["food", "music", "culture", "history", "people"];

  // ✨ animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateAnim = useRef(new Animated.Value(20)).current;

  // 🔥 fade in al montar
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),

      Animated.timing(translateAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleChange = (value) => {
    setText(value);

    if (value.length === 0) {
      setSuggestions([]);
      return;
    }

    const filtered = data.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filtered);
  };

  const handleSubmit = () => {
    Keyboard.dismiss();

    if (onSearch) onSearch(text);

    setSuggestions([]);
  };

  const handleSelect = (value) => {
    setText(value);

    Keyboard.dismiss();

    setSuggestions([]);

    if (onSearch) onSearch(value);
  };

  return (
    <Animated.View
      style={[
        styles.container,

        // 🔥 cuando es floating NO baja
        floating && styles.floatingContainer,

        {
          opacity: fadeAnim,
          transform: [{ translateY: translateAnim }],
        },
      ]}
    >

      <TextInput
        value={text}
        onChangeText={handleChange}
        placeholder="Search..."
        placeholderTextColor="rgba(255,255,255,0.5)"
        style={[
          styles.input,
          floating && styles.floatingInput,
        ]}
        returnKeyType="search"
        onSubmitEditing={handleSubmit}
      />

      {/* 🔥 AUTOCOMPLETE */}
      {suggestions.length > 0 && (
        <View style={styles.suggestions}>
          {suggestions.map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => handleSelect(item)}
              style={styles.suggestionItem}
            >
              <Text style={styles.suggestionText}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingHorizontal: 24,
  },

  // 🔥 sticky search fix
  floatingContainer: {
    marginTop: 0,
    paddingHorizontal: 0,
  },

  input: {
    borderWidth: 1,
    borderColor: "#C6A769",
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 18,

    color: "white",

    backgroundColor: "rgba(255,255,255,0.05)",
  },

  // 🔥 floating search style
  floatingInput: {
    backgroundColor: "rgba(0,0,0,0.92)",
    borderColor: "#C6A769",
  },

  suggestions: {
    marginTop: 10,
    backgroundColor: "rgba(0,0,0,0.9)",
    borderRadius: 12,
    padding: 10,
  },

  suggestionItem: {
    paddingVertical: 8,
  },

  suggestionText: {
    color: "white",
    textTransform: "capitalize",
  },
});