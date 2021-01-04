import React from "react";
import { StyleSheet, View } from "react-native";
import { backgroundColor } from "../constants";
import RoomScreenControlPanel from "./RoomScreenControlPanel";
import RoomScreenHeader from "./RoomScreenHeader";

const RoomScreen = ({ route }) => {
  const { name, roomID, service } = route.params;
  return (
    <View style={styles.container}>
      <RoomScreenHeader name={name} />
      <RoomScreenControlPanel roomID={roomID} service={service} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
});
export default RoomScreen;
