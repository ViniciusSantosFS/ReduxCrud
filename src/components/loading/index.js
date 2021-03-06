import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#2D233A" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#644693",
  },
});
