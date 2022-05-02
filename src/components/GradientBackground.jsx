import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const GradientBackground = ({ children }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <LinearGradient
        colors={["#084F6A", "#75CEDB", "white"]}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.5, y: 0.7 }}
      />
      {children}
    </View>
  );
};

export default GradientBackground;
