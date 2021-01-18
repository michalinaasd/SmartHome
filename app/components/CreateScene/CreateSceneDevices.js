import React, { useState, useEffect } from "react";
import AppButton from "../AppButton";
import CreateSceneDevicesList from "./CreateSceneDevicesList";
import CreateSceneContainer from "./CreateSceneContainer";

const CreateSceneDevices = ({ route, navigation }) => {
  const [selectedDevices, setSelectedDevices] = useState([]);

  useEffect(() => {
    console.log("check");
  }, [selectedDevices]);

  return (
    <CreateSceneContainer title="Select devices">
      <CreateSceneDevicesList
        service={route.params.service}
        onSelect={(deviceID, deviceName) =>
          setSelectedDevices([
            ...selectedDevices,
            { idx: selectedDevices.length, id: deviceID, name: deviceName },
          ])
        }
        onUnselect={(deviceID) => {
          let arr = selectedDevices;
          for (var i = 0; i < arr.length; i++) {
            console.log(arr);
            if (arr[i]["id"] === deviceID) {
              arr = arr.splice(i, i);
            }
          }
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
        disabled={selectedDevices.length === 0}
      />
    </CreateSceneContainer>
  );
};

export default CreateSceneDevices;
