import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import Slider from "@react-native-community/slider";
import SectionTitle from "../SectionTitle";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const RoomScreenLamp = (props) => {
  const [targetValue, setTargetValue] = useState(0);
  const [isLampOn, setIsLampOn] = useState(false);

  useEffect(() => {
    const promise = props.service.getDeviceState(props.id);
    promise.then((res) => {
      setIsLampOn(res.state);
      setTargetValue(parseInt(res.state_value));
    });
  }, []);

  return (
    <View style={{ flex: 4 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 30,
          paddingBottom: 50,
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
          OFF
        </Text>
        <Switch
          style={{ transform: [{ scaleX: 3 }, { scaleY: 3 }] }}
          onValueChange={() => {
            setIsLampOn(!isLampOn);
            props.service.toggle(props.id, isLampOn, targetValue);
          }}
          value={isLampOn}
        />
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
          ON
        </Text>
      </View>
      {isLampOn && (
        <View>
          <SectionTitle title="Lamp brightness" />
          <View style={styles.sliderContainer}>
            <MaterialCommunityIcons
              name="lightbulb-outline"
              color="white"
              size={30}
            />
            <Slider
              style={[styles.slider, { width: 200, height: 40 }]}
              value={targetValue}
              minimumValue={0}
              step={1}
              maximumValue={100}
              minimumTrackTintColor="rgb(0, 150, 136)"
              maximumTrackTintColor="#777"
              onValueChange={(value) => {
                setTargetValue(value);
                props.service.setDeviceValue(props.id, value);
              }}
            />
            <MaterialCommunityIcons
              name="lightbulb-on"
              color="white"
              size={30}
            />
          </View>
          <Text style={styles.sliderValue}>{targetValue}%</Text>
        </View>
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
  },
  slider: {
    marginLeft: 8,
    marginRight: 8,
  },
  sliderValue: {
    textAlign: "center",
    color: "white",
  },
});

export default RoomScreenLamp;
