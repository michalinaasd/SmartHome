import React from "react";
import { View, StyleSheet, Text } from "react-native";
import SectionTitle from "../SectionTitle";
import AppButton from "../AppButton";
import { useForm, Controller } from "react-hook-form";

import { Switch } from "react-native-gesture-handler";

const CreateSceneDevicesStates = ({ route, navigation }) => {
  const { handleSubmit, control } = useForm();
  const { devices, service, sceneName, sceneIcon } = route.params;
  const onSubmit = (data) => {
    let devicesArr = [];
    Object.entries(data).forEach(([key, value]) => {
      devicesArr.push({
        device_id: key.slice(6),
        state: value ? "True" : "False",
      });
    });
    const promise = service.createScene({
      scene: {
        name: sceneName,
        building: "1",
        //icon: sceneIcon
      },
      devices: devicesArr,
    });
    promise.then((res) => console.log(res));
    navigation.navigate("home");
  };
  return (
    <View style={styles.container}>
      <SectionTitle title="Set states" />
      <form>
        {Object.values(devices).map((item) => (
          <Controller
            key={item.id}
            defaultValue={false}
            name={`switch${item.id}`}
            control={control}
            render={({ onChange, value }) => (
              <View style={styles.item}>
                <Text style={styles.itemText}>{item.name}</Text>
                <View style={{ justifyContent: "center" }}>
                  <Switch onValueChange={onChange} value={value} />
                </View>
              </View>
            )}
          />
        ))}
        <AppButton title="Submit" onPress={handleSubmit(onSubmit)} />
      </form>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 50,
    paddingBottom: 20,
  },
  item: {
    height: 50,
    flexDirection: "row",
    marginVertical: 5,
    elevation: 5,
    borderRadius: 10,
    borderColor: "gray",
    backgroundColor: "#e3e3e3",
  },
  itemText: {
    alignSelf: "center",
    paddingHorizontal: 10,
    fontSize: 20,
  },
});

export default CreateSceneDevicesStates;
