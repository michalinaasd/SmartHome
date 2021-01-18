import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import SectionTitle from "../SectionTitle";
import MeasuringDeviceItem from "./MeasuringDeviceItem";
import { List } from "react-native-paper";
import MeasuringDevice from "./MeasuringDevice";
import { backgroundColor, backgroundColorLight, backgroundColorLighter } from "../constants";

const MeasuringDeviceList = ({ service, navigation }) => {
  const [data, setData] = useState("");
  const [expandedDevice, setExpandedDevice] = useState(null);

  useEffect(() => {
    service.getData(`/api/measuring-devices/`).then((res) => {
      setData(res);
    });
  }, []);

  return (
    <View style={styles.container}>
      <SectionTitle title="Measurements" />
      <View style={styles.devices}>
        {Object.values(data).map(({ name, id }) => (
          <List.Accordion
            theme={{ colors: { primary: "#fff" } }}
            style={styles.accordion}
            title={name}
            titleStyle={{ color: "#fff" }}
            style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
            key={id}
            name={name}
            onPress={() => {
              setExpandedDevice(id == expandedDevice ? null : id);
            }}
            expanded={expandedDevice == id}
          >
            <MeasuringDevice
              route={{ params: { name, deviceId: id, service } }}
            />
          </List.Accordion>
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
  accordion: {
    color: "#fff",
  },
});

export default MeasuringDeviceList;
