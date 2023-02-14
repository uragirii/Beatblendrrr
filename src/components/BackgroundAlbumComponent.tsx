import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  albumUrl: string;
  startColor: string;
}

const BackgroundAlbumComponent = ({ albumUrl, startColor }: Props) => {
  return (
    <View style={styles.blurImage}>
      <ImageBackground
        style={styles.blurImage}
        source={{ uri: albumUrl }}
        blurRadius={5}
        resizeMode="cover"
      >
        <LinearGradient
          style={{ flex: 1 }}
          colors={[
            startColor === "transparent" ? startColor : `${startColor}88`,
            "rgba(0,0,0,1)",
          ]}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  blurImage: {
    height: "100%",
    width: "100%",
  },
});

export default BackgroundAlbumComponent;
