import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import SectionTitle from "../SectionTitle";
import MeasuringDeviceItem from "./MeasuringDeviceItem";

const MeasuringDeviceList = ({ service, navigation }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    service.getData(`/api/measuring-devices/`).then((res) => {
      setData(res)
    });
  }, []);

  return (
    <View style={styles.container}>
      <SectionTitle title="Measuring devices" />
      <View style={styles.devices}>
        {Object.values(data).map(({ name, id }) => (
          <MeasuringDeviceItem
            key={id}
            name={name}
            onPress={() =>
              {
                navigation.navigate("measuring-device", {
                  name: name,
                  deviceId: id,
                  service: service,
                })
              }
            }
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "column",
  },
  devices: {
    flexDirection: "column",
  },
});

export default MeasuringDeviceList;
