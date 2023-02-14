import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Slider from "@react-native-community/slider";

interface Props {
  progress: number;
  seekBarColor: string;
  onValueChange: (newValue: number) => void;
}

const TRANSPARENT_IMAGE =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAQAAAAA2RLUcAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACdFJOUwAAdpPNOAAAAAJiS0dEAAHdihOkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5wIOCjsJFXN3gwAAAAFvck5UAc+id5oAAAAOSURBVBjTY2AYBYMJAAABkAABxZvbSQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wMi0xNFQxMDo1ODo1NCswMDowMFHnbTAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDItMTRUMTA6NTg6NTQrMDA6MDAgutWMAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAyLTE0VDEwOjU5OjA5KzAwOjAwsVrwyQAAAABJRU5ErkJggg==";

const SeekBarComponent = ({ progress, seekBarColor, onValueChange }: Props) => {
  return (
    <View>
      <Slider
        style={styles.seekBar}
        minimumValue={0}
        maximumValue={1}
        value={progress}
        minimumTrackTintColor={seekBarColor}
        onValueChange={onValueChange}
        thumbImage={{
          uri: TRANSPARENT_IMAGE,
        }}
        tapToSeek
      />
    </View>
  );
};

const styles = StyleSheet.create({
  seekBar: {
    paddingBottom: 10,
    marginBottom: 30,
    marginLeft: 16,
    marginRight: 16,
  },
});

export default SeekBarComponent;
