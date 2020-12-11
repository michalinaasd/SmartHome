import React, { Fragment, useState, useEffect } from "react";
import { ScrollView } from "react-native";
import CreateSceneDeviceListItem from "./CreateSceneDeviceListItem";
import SectionTitle from "../SectionTitle";

const CreateSceneDevicesList = ({ service, onSelect, onUnselect }) => {
  const [rooms, setRooms] = useState({});
  const [devices, setDevices] = useState({});
  useEffect(() => {
    let promise = service.getData("/api/rooms/");
    promise.then((res) => {
      setRooms(res);
    });
    promise = service.getData("/api/devices/");
    promise.then((res) => {
      setDevices(res);
    });
  }, []);

  return (
    <ScrollView style={{ marginVertical: 10 }}>
      {Object.values(rooms).flatMap(({ id, name }) => {
        return (
          <Fragment key={id}>
            <SectionTitle
              title={name.charAt(0).toUpperCase() + name.slice(1)}
            />
            {Object.values(devices)
              .filter(({ room }) => room === id)
              .map(({ id, name }) => (
                <CreateSceneDeviceListItem
                  key={id}
                  id={name.charAt(0).toUpperCase() + name.slice(1)}
                  onSelect={onSelect}
                  onUnselect={onUnselect}
                />
              ))}
          </Fragment>
        );
      })}
    </ScrollView>
  );
};

export default CreateSceneDevicesList;
