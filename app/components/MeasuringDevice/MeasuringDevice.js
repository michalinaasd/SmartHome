import React from "react";
import { StyleSheet, View } from "react-native";
import RoomScreenHeader from "../RoomScreen/RoomScreenHeader";
import MeasuringDeviceControl from "./MeasuringDeviceControl";

const MeasuringDevice = ({ route }) => {
  const { name, deviceId, service } = route.params;
  return (
    <View style={styles.container}>
      <RoomScreenHeader name={name} />
      <MeasuringDeviceControl deviceId={deviceId} service={service} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default MeasuringDevice;
