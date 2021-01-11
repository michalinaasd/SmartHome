import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import AppButton from "../AppButton";
import { useForm, Controller } from "react-hook-form";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { backgroundColor, devicesIcons } from "../constants";
import { Switch } from "react-native-gesture-handler";
import CreateSceneContainer from "./CreateSceneContainer";
import Slider from "@react-native-community/slider";

const CreateSceneDevicesStates = ({ route, navigation }) => {
  const { handleSubmit, control } = useForm();
  const { devices, service, sceneName, sceneIcon } = route.params;

  const onSubmit = (data) => {
    console.log(data);
    let devicesArr = [];
    Object.entries(data)
      .filter(([key, value]) => !key.includes("slider"))
      .forEach(([key, value]) => {
        devicesArr.push({
          device_id: key.slice(6),
          state: value,
          state_value: data[`slider${key.slice(6)}`],
        });
      });
    service
      .createScene({
        scene: {
          name: sceneName,
          building: "1",
          icon: sceneIcon,
        },
        devices: devicesArr,
      })
      .then(() => navigation.navigate("home"));
  };

  return (
    <CreateSceneContainer title="Set states">
      <View style={{ flex: 1 }}>
        {Object.values(devices).map((item) => (
          <Controller
            key={item.id}
            defaultValue={false}
            name={`switch${item.id}`}
            control={control}
            render={({ onChange, value }) => (
              <View style={styles.container}>
                <View style={styles.item}>
                  <MaterialCommunityIcons
                    name={devicesIcons[item.name]}
                    color={backgroundColor}
                    size={40}
                  />
                  <Text style={styles.itemText}>
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </Text>
                  <View style={{ justifyContent: "center" }}>
                    <Switch onValueChange={onChange} value={value} />
                  </View>
                </View>

                {item.name === "bulb" && value && (
                  <Controller
                    name={`slider${item.id}`}
                    control={control}
                    defaultValue={100}
                    render={({ onChange, value }) => (
                      <View style={{ padding: 10 }}>
                        <Text style={{ textAlign: "center" }}>Brightness</Text>
                        <Slider
                          style={styles.slider}
                          onValueChange={(value) => {
                            onChange(value);
                          }}
                          value={value}
                          valueLabelDisplay="auto"
                          minimumValue={0}
                          step={1}
                          maximumValue={100}
                        />
                        <Text style={{ textAlign: "center" }}>{value}%</Text>
                      </View>
                    )}
                  />
                )}
              </View>
            )}
          />
        ))}
      </View>
      <AppButton title="Done" onPress={handleSubmit(onSubmit)} />
    </CreateSceneContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "#e3e3e3",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  itemText: {
    alignSelf: "center",
    paddingHorizontal: 10,
    fontSize: 20,
  },
  slider: {
    alignItems: "center",
    width: "100%",
    height: 40,
  },
});

export default CreateSceneDevicesStates;
