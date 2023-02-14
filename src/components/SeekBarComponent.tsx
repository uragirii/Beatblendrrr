import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Slider from "@react-native-community/slider";

interface Props {
  setProgress: number;
  durationMilis: number;
  sliderValue: number;
}

const TRANSPARENT_IMAGE =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAQAAAAA2RLUcAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACdFJOUwAAdpPNOAAAAAJiS0dEAAHdihOkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5wIOCjsJFXN3gwAAAAFvck5UAc+id5oAAAAOSURBVBjTY2AYBYMJAAABkAABxZvbSQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wMi0xNFQxMDo1ODo1NCswMDowMFHnbTAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDItMTRUMTA6NTg6NTQrMDA6MDAgutWMAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAyLTE0VDEwOjU5OjA5KzAwOjAwsVrwyQAAAABJRU5ErkJggg==";

const SeekBarComponent = ({
  setProgress,
  durationMilis,
  sliderValue,
}: Props) => {
  return (
    <View>
      <Slider
        style={styles.seekBar}
        minimumValue={0}
        maximumValue={durationMilis}
        disabled
        thumbImage={{
          uri: TRANSPARENT_IMAGE,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  seekBar: {
    paddingBottom: 10,
    marginBottom: 10,
  },
});

export default SeekBarComponent;
