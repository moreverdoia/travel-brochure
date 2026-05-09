import React from "react";
import { View, ActivityIndicator } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";

import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    PlayfairRegular: require("./assets/Fonts/PlayfairDisplay-Regular.ttf"),
    PlayfairItalic: require("./assets/Fonts/PlayfairDisplay-Italic.ttf"),
    PlayfairBold: require("./assets/Fonts/PlayfairDisplay-Bold.ttf"),

    MontserratLight: require("./assets/Fonts/Montserrat-Light.ttf"),
    MontserratRegular: require("./assets/Fonts/Montserrat-Regular.ttf"),
    MontserratMedium: require("./assets/Fonts/Montserrat-Medium.ttf"),
    MontserratSemiBold: require("./assets/Fonts/Montserrat-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#0A0A0A",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="#C6A769" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}