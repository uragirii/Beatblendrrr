import { View, StyleSheet, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import SongDetails from "./SongDetails";
import LyricsLines from "./LyricsLines";
import AlbumCoverComponent from "./AlbumCoverComponent";
import BackgroundAlbumComponent from "./BackgroundAlbumComponent";
import SeekBarComponent from "./SeekBarComponent";
import ImageColors from "react-native-image-colors";
import { Audio } from "expo-av";
const { height } = Dimensions.get("screen");

interface Props {
  albumArt: string;
  artistName: string;
  trackName: string;
  shouldPlay: boolean;
  songUrl: string;
}

const SnapComponent = ({
  albumArt,
  artistName,
  trackName,
  shouldPlay,
  songUrl,
}: Props) => {
  const [startColor, setStartColor] = useState("transparent");

  const [sound, setSound] = useState<Audio.Sound>();

  useEffect(() => {
    (async () => {
      // @ts-ignore
      const { sound } = await Audio.Sound.createAsync(songUrl);
      setSound(sound);
    })();
  }, [songUrl]);

  useEffect(() => {
    if (shouldPlay) {
      sound?.playAsync();
      return;
    }
    sound?.pauseAsync();
  }, [shouldPlay, sound]);

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    (async () => {
      const result = await ImageColors.getColors(albumArt, {
        fallback: "#228B22",
        cache: true,
      });
      switch (result.platform) {
        case "ios":
          setStartColor(result.primary);
          break;
        case "android":
          setStartColor(result.dominant ?? "transparent");
          break;
        case "web":
          setStartColor(result.lightVibrant ?? "transparent");
      }
    })();
  }, [albumArt]);

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <BackgroundAlbumComponent albumUrl={albumArt} startColor={startColor} />
      </View>
      <View style={styles.foreground}>
        <View>
          <LyricsLines
            firstLine={shouldPlay ? "Playing" : "Not Playing"}
            secondLine="I blinded by the lights"
          />
        </View>
        <View style={styles.albumArt}>
          <AlbumCoverComponent albumUrl={albumArt} />
        </View>
        <View>
          <SongDetails artistName={artistName} songName={trackName} />
          <View>
            <SeekBarComponent
              setProgress={3}
              durationMilis={5}
              sliderValue={4}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
    width: "100%",
  },
  albumArt: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  background: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  foreground: {
    flex: 1,
    justifyContent: "space-between",
  },
});

export default SnapComponent;
