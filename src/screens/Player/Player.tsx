import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import SnapComponent from "../../components/SnapComponent";
import { DEMO_SOUNDS } from "../../utils/demo";

const SOUNDS = [
  require("../../../assets/Sound_0.mp3"),
  require("../../../assets/Sound_1.mp3"),
  require("../../../assets/Sound_2.mp3"),
  require("../../../assets/Sound_3.mp3"),
  require("../../../assets/Sound_4.mp3"),
];
const { height } = Dimensions.get("screen");

const Player = () => {
  const [screenNum, setScreenNum] = useState(0);
  const [playing, setPlaying] = useState(true);

  return (
    <View style={styles.container}>
      {/* <Button title="Play" onPress={playSound} /> */}

      <FlatList
        pagingEnabled
        onScroll={(event) => {
          setScreenNum(Math.round(event.nativeEvent.contentOffset.y / height));
        }}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => setPlaying(!playing)}>
            <SnapComponent
              artistName={item.artistName}
              albumArt={item.albumArt}
              trackName={item.name}
              shouldPlay={playing && index === screenNum}
              songUrl={SOUNDS[index]}
            />
          </Pressable>
        )}
        keyExtractor={(item) => item.albumArt}
        data={DEMO_SOUNDS}
      />
      {/* <SnapComponent /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Player;
