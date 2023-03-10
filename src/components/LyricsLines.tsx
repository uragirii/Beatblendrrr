import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createSeprateLine } from "./../utils";

interface Props {
  firstLine: string;
  secondLine: string;
}

const LyricsLines = ({ firstLine, secondLine }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{firstLine}</Text>
      <Text style={styles.textStyle}>{secondLine}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    marginLeft: 16,
  },
  textStyle: {
    fontStyle: "italic",
    fontWeight: "600",
    fontSize: 20,
    padding: 4,
    marginTop: 16,
    color: "white",
  },
});

export default LyricsLines;
