import React, { useState } from "react";
import AppButton from "../AppButton";
import CreateSceneDevicesList from "./CreateSceneDevicesList";
import CreateSceneContainer from "./CreateSceneContainer";

const CreateSceneDevices = ({ route, navigation }) => {
  const [selectedDevices, setSelectedDevices] = useState([]);

  return (
    <CreateSceneContainer title="Select devices">
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
    </CreateSceneContainer>
  );
};

export default CreateSceneDevices;
