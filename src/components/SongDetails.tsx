import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface Props {
  songName: string;
  artistName: string;
}

const SongDetails = ({ songName, artistName }: Props) => {
  return (
    <View>
      <Text style={styles.songName} numberOfLines={1}>
        {songName}
      </Text>
      <Text style={styles.artist}>{artistName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  songName: {
    fontSize: 24,
    fontWeight: "700",
    paddingBottom: 8,
    color: "white",
  },
  artist: {
    fontSize: 16,
    paddingBottom: 8,
    color: "white",
    marginBottom: 10,
  },
});

export default SongDetails;
