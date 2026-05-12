import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../Screens/HomeScreen";
import CultureScreen from "../Screens/CultureScreen";
import MusicScreen from "../Screens/MusicScreen";
import AdvicesScreen from "../Screens/AdvicesScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "fade",
        contentStyle: {
          backgroundColor: "#0A0A0A",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />

      <Stack.Screen
        name="Culture"
        component={CultureScreen}
      />

      <Stack.Screen 
        name="Music"
        component={MusicScreen} 
      />

      <Stack.Screen
        name="Advices"
        component={AdvicesScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}