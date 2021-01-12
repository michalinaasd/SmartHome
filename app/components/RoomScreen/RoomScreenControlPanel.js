import React from "react";
import { StyleSheet, View, Text } from "react-native";
import RoomScreenDevices from "./RoomScreenDevices";
import { ScrollView } from "react-native-gesture-handler";
import ValueController from "../Common/ValueController";

const RoomScreenControlPanel = ({ roomID, service }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <RoomScreenDevices service={service} roomID={roomID} />
        <ValueController suffix="°C" min="18" max="24" value="22" targetValue="21" />
        <ValueController icon="water-percent" suffix="%" min="30" max="80" value="35" />
      </ScrollView>
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
