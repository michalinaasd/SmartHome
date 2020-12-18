import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import AppButton from "../AppButton";
import CreateSceneDevicesList from "./CreateSceneDevicesList";
import SectionTitle from "../SectionTitle";

const CreateSceneDevices = ({ route, navigation }) => {
  const [selectedDevices, setSelectedDevices] = useState([]);

  return (
    <View style={styles.container}>
      <SectionTitle title="Select devices" />
      <CreateSceneDevicesList
        service={route.params.service}
        onSelect={(deviceID, deviceName) =>
          setSelectedDevices([
            ...selectedDevices,
            { id: deviceID, name: deviceName },
          ])
        }
        onUnselect={(deviceID) => {
          let arr = selectedDevices;
          delete arr[deviceID];
          setSelectedDevices(arr);
        }}
      />
      <AppButton
        title="Next"
        onPress={() => {
          navigation.navigate("create-scene-devices-states", {
            devices: selectedDevices,
            sceneName: route.params.sceneName,
            sceneIcon: route.params.sceneIcon,
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 50,
    paddingBottom: 20,
  },
});

export default CreateSceneDevices;
