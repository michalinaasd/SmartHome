import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import SectionTitle from "../SectionTitle";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ValueSlider from "../Slider";

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
      <SectionTitle title="Lamp toggle" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 30,
          paddingVertical: 30,
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
          OFF
        </Text>
        <Switch
          style={{ width: 40, transform: [{ scaleX: 2.5 }, { scaleY: 2.5 }] }}
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
          <ValueSlider
            onChange={(value) => {
              setTargetValue(value);
              props.service.setDeviceValue(props.id, value);
            }}
            value={targetValue}
            icons={true}
          />
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
