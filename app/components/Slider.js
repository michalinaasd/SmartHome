import React from "react";
import Slider from "@react-native-community/slider";
import { View, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ValueSlider = (props) => {
  return (
    <View style={styles.sliderContainer}>
      {props.icons && (
        <MaterialCommunityIcons
          name="lightbulb-outline"
          color="rgb(255,255,255)"
          size={30}
        />
      )}
      <Slider
        style={styles.slider}
        value={props.value}
        minimumValue={0}
        step={1}
        maximumValue={100}
        minimumTrackTintColor="rgb(0, 150, 136)"
        maximumTrackTintColor="#777"
        onValueChange={props.onChange}
      />
      {props.icons && (
        <MaterialCommunityIcons
          name="lightbulb-on"
          color="rgb(255,255,255)"
          size={30}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  slider: {
    marginHorizontal: 8,
    width: "100%",
    height: 40,
  },
  sliderValue: {
    textAlign: "center",
  },
});

export default ValueSlider;
