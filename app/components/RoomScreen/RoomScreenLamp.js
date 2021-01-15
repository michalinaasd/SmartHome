import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import SectionTitle from "../SectionTitle";
import ValueSlider from "../Slider";

const RoomScreenLamp = () => {
  const [targetValue, setTargetValue] = useState(0);

  return (
    <View>
      <SectionTitle title="Lamp brightness" />
      <ValueSlider onChange={(value) => setTargetValue(value)} icons={true} />
      <Text style={styles.sliderValue}>{targetValue}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderValue: {
    textAlign: "center",
  },
});

export default RoomScreenLamp;
