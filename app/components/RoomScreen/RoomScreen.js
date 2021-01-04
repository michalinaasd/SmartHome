import React from "react";
import { StyleSheet, View, Button } from "react-native";
import RoomScreenControlPanel from "./RoomScreenControlPanel";
import RoomScreenHeader from "./RoomScreenHeader";

const RoomScreen = ({ navigation, route }) => {
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
  },
});
export default RoomScreen;
