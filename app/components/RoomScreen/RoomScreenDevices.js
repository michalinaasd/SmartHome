import RoomScreenTemperature from "./RoomScreenTemperature";
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import RoomScreenControlItem from "./RoomScreenControlItem";
import SectionTitle from "../SectionTitle";
import { devicesIcons } from "../constants";

const RoomScreenDevices = ({ service, roomID, onPress }) => {
  const [data, setData] = useState("");
  useEffect(() => {
    const promise = service.getData(`/api/rooms/${roomID}/`);
    promise.then((res) => setData(res));
  }, []);

  return (
    <View style={styles.container}>
      <SectionTitle title="Devices" />
      <View style={styles.iconsContainer}>
        {Object.entries(data).flatMap(([key, devices]) => {
          if (key === "room_devices") {
            return devices.map(({ name, id }) => (
              <RoomScreenControlItem
                key={id}
                id={id}
                name={name}
                icon={devicesIcons[name]}
                color="#009387"
                onPress={onPress}
              />
            ));
          } else return [];
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  iconsContainer: {
    flexDirection: "row",
  },
});

export default RoomScreenDevices;
