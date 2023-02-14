import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

interface Props {
  albumUrl: string;
}

const AlbumCoverComponent = ({ albumUrl }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.albumStyles}
        source={{
          uri: albumUrl,
        }}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  albumStyles: {
    height: "80%",
    width: "100%",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default AlbumCoverComponent;
