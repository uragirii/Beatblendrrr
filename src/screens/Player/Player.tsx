import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SnapComponent from "../../components/SnapComponent";

const Player = () => {
  return (
    <View style={styles.container}>
      <SnapComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Player;
