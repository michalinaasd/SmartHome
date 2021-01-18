import React from "react";
import { StyleSheet, View } from "react-native";
import { backgroundColor } from "../constants";
import RoomScreenHeader from "../RoomScreen/RoomScreenHeader";
import SectionTitle from "../SectionTitle";
import MeasuringDeviceControl from "./MeasuringDeviceControl";


const MeasuringDevice = ({ route }) => {
  const { name, deviceId, service } = route.params;
  return (
    <View style={styles.container}>
      <SectionTitle title={name} style={{paddingTop: 36}}/>
      <MeasuringDeviceControl deviceId={deviceId} service={service} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
    paddingHorizontal: 15,
    flex: 1,
  },
});
export default MeasuringDevice;
