import React from "react";
import { StyleSheet, View } from "react-native";
import RoomScreenDevices from "./RoomScreenDevices";
import RoomScreenTemperature from "./RoomScreenTemperature";
import RoomScreenLamp from "./RoomScreenLamp";

const RoomScreenControlPanel = ({ roomID, service }) => {
  return (
    <View style={styles.container}>
      <RoomScreenDevices service={service} roomID={roomID} />
      <RoomScreenLamp />
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
