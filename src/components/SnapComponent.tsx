import { View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import SongDetails from "./SongDetails";
import LyricsLines from "./LyricsLines";
import AlbumCoverComponent from "./AlbumCoverComponent";
import BackgroundAlbumComponent from "./BackgroundAlbumComponent";
import SeekBarComponent from "./SeekBarComponent";
import ImageColors from "react-native-image-colors";

const ALBUM_ART =
  "https://s.mxmcdn.net/images-storage/albums2/2/1/3/7/8/3/37387312_500_500.jpg";

const SnapComponent = ({}) => {
  useEffect(() => {
    (async () => {
      const result = await ImageColors.getColors(ALBUM_ART, {
        fallback: "#228B22",
        cache: true,
      });
      console.log(result.platform);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <BackgroundAlbumComponent albumUrl={ALBUM_ART} />
      </View>
      <View style={styles.foreground}>
        <View>
          <LyricsLines
            firstLine="Ooooooh"
            secondLine="I blinded by the lights"
          />
        </View>
        <View style={styles.albumArt}>
          <AlbumCoverComponent albumUrl={ALBUM_ART} />
        </View>
        <View>
          <SongDetails artistName="The Weeknd" songName="Blinding Lights" />
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
    height: "100%",
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
