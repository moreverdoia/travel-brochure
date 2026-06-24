import React, { useState, useEffect, useRef } from "react";

import {
  View,
  Text,
  Pressable,
  StyleSheet,
  PanResponder,
} from "react-native";

import { Audio } from "expo-av";

import colors from "../styles/Colors";

import AudioVisualizer from "./AudioVisualizer";

import {
  setCurrentSound,
  getCurrentId,
  stopCurrentSound,
} from "./AudioManager";

export default function AudioCard({ title, file, id }) {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  const [progress, setProgress] = useState(0);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  const widthRef = useRef(250);

  // 🎧 LOAD AUDIO
  useEffect(() => {
    let audio;

    const load = async () => {
      const { sound } = await Audio.Sound.createAsync(file);

      sound.setOnPlaybackStatusUpdate((status) => {
        if (!status.isLoaded) return;

        setPosition(status.positionMillis || 0);
        setDuration(status.durationMillis || 0);

        if (status.durationMillis) {
          setProgress(
            status.positionMillis / status.durationMillis
          );
        }

        if (status.didJustFinish) {
          setIsPlaying(false);

          if (getCurrentId() === id) {
            setCurrentSound(null, null);
          }
        }
      });

      audio = sound;
      setSound(sound);
    };

    load();

    return () => {
      if (audio) audio.unloadAsync();
    };
  }, []);

  // 🔥 sync global
  useEffect(() => {
    const interval = setInterval(() => {
      const activeId = getCurrentId();

      if (activeId !== id && isPlaying) {
        setIsPlaying(false);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [isPlaying, id]);

  // ▶ PLAY / PAUSE
  const toggle = async () => {
    if (!sound) return;

    try {
      const activeId = getCurrentId();

      // 🔥 si hay otro audio activo
      if (activeId && activeId !== id) {
        await stopCurrentSound();
      }

      // 🔥 PAUSAR
      if (isPlaying) {
        await sound.pauseAsync();

        setIsPlaying(false);

        return;
      }

      // 🔥 reproducir desde donde quedó
      await sound.playAsync();

      setCurrentSound(sound, id);

      setIsPlaying(true);

      setHasPlayed(true);
    } catch (e) {
      console.log("Audio error:", e);
    }
  };

  // 🎯 label
  const getLabel = () => {
    if (isPlaying) return "Now playing...";
    if (hasPlayed) return "Paused";
    return "Play ▶";
  };

  // ⏱ formatear tiempo
  const formatTime = (millis) => {
    const totalSec = Math.floor(millis / 1000);
    const min = Math.floor(totalSec / 60);
    const sec = totalSec % 60;

    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  // 🎧 SEEK (drag)
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: async (evt) => {
      if (!sound || !duration) return;

      const x = evt.nativeEvent.locationX;
      const percent = Math.max(0, Math.min(1, x / widthRef.current));

      const newPosition = percent * duration;

      await sound.setPositionAsync(newPosition);
    },
  });

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      {/* BUTTON */}
      <Pressable onPress={toggle} style={styles.button}>
        <Text style={styles.text}>{getLabel()}</Text>
      </Pressable>

      {/* VISUALIZER */}
      <AudioVisualizer isPlaying={isPlaying} />

      {/* ⏱ TIME */}
      <View style={styles.timeRow}>
        <Text style={styles.timeText}>
          {formatTime(position)}
        </Text>

        <Text style={styles.timeText}>
          {formatTime(duration)}
        </Text>
      </View>

      {/* SEEK BAR */}
      <View
        style={styles.progressBarContainer}
        {...panResponder.panHandlers}
      >
        <View
          style={[
            styles.progressFill,
            { width: `${progress * 100 || 0}%` },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
    backgroundColor: "rgba(255,255,255,0.05)",
  },

  title: {
    color: colors.white,
    fontSize: 18,
    marginBottom: 10,
  },

  button: {
    borderWidth: 1,
    borderColor: colors.gold,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 18,
    alignItems: "center",
  },

  text: {
    color: colors.white,
  },

  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  timeText: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 12,
  },

  progressBarContainer: {
    height: 4,
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 10,
    marginTop: 10,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#C6A769",
  },
});