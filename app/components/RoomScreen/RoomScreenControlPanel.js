import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import RoomScreenDevices from "./RoomScreenDevices";
import RoomScreenTemperature from "./RoomScreenTemperature";
import SectionTitle from "../SectionTitle";
import RoomScreenLamp from "./RoomScreenLamp";
import RoomScreenBlinds from "./RoomScreenBlinds";

const RoomScreenControlPanel = ({ roomID, service }) => {
  const [selectedDevice, setSelectedDevice] = useState("");
  return (
    <View style={styles.container}>
      <RoomScreenDevices
        service={service}
        roomID={roomID}
        onPress={(device) => setSelectedDevice(device)}
      />

      {selectedDevice === "bulb" ? (
        <RoomScreenLamp />
      ) : selectedDevice === "blinds" ? (
        <RoomScreenBlinds />
      ) : (
        <RoomScreenTemperature />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "column",
    padding: 10,
  },
});

export default RoomScreenControlPanel;
