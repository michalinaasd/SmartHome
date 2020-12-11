import React from "react";
import { View, StyleSheet, Text } from "react-native";
import SectionTitle from "../SectionTitle";
import AppButton from "../AppButton";
import { Switch } from "react-native-gesture-handler";

const CreateSceneDevicesStates = ({ route, navigation }) => {
  const { devices } = route.params;
  console.log(typeof devices);
  return (
    <View style={styles.container}>
      <SectionTitle title="Set states" />
      {devices.map((value) => (
        <View key={Math.random()} style={styles.item}>
          <Text style={styles.itemText}>{value}</Text>
          <View style={{ justifyContent: "center" }}>
            <Switch />
          </View>
        </View>
      ))}
      <AppButton
        title="Done"
        onPress={() => {
          navigation.navigate("home");
        }}
      />
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
