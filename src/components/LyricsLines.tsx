import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createSeprateLine } from "./../utils";

interface Props {
  firstLine: string;
  secondLine: string;
}

const LyricsLines = ({ firstLine, secondLine }: Props) => {
  return (
    <View>
      <Text style={styles.textStyle}>{firstLine}</Text>
      <Text style={styles.textStyle}>{secondLine}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontStyle: "italic",
    fontWeight: "600",
    fontSize: 20,
    padding: 4,
    color: "white",
  },
});

export default LyricsLines;
