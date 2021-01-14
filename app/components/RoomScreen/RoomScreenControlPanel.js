import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import RoomScreenDevices from "./RoomScreenDevices";
import RoomScreenTemperature from "./RoomScreenTemperature";
import RoomScreenLamp from "./RoomScreenLamp";
import RoomScreenBlinds from "./RoomScreenBlinds";

const RoomScreenControlPanel = ({ roomID, service }) => {
  const [selectedDevice, setSelectedDevice] = useState({
    device: null,
    id: null,
  });

  return (
    <View style={styles.container}>
      <RoomScreenDevices
        service={service}
        roomID={roomID}
        onPress={(device, id) => setSelectedDevice({ device: device, id: id })}
      />

      {selectedDevice.device === "bulb" ? (
        <RoomScreenLamp service={service} id={selectedDevice.id} />
      ) : selectedDevice.device === "blinds" ? (
        <RoomScreenBlinds service={service} id={selectedDevice.id} />
      ) : (
        selectedDevice.device === "temperature" && (
          <RoomScreenTemperature service={service} id={selectedDevice.id} />
        )
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
