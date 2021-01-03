import React, { useState } from "react";
import { StyleSheet } from "react-native";
import SceneItem from "../SceneItem";
import { scenesIcons } from "../constants";
import AppButton from "../AppButton";
import CreateSceneContainer from "./CreateSceneContainer";
import { ScrollView } from "react-native-gesture-handler";

const CreateSceneIcon = ({ navigation }) => {
  const [selectedIcon, setSelectedIcon] = useState("");

  return (
    <CreateSceneContainer title="Select Icon">
      <ScrollView contentContainerStyle={styles.icons}>
        {scenesIcons.map((value) => {
          return (
            <SceneItem
              key={value}
              icon={value}
              selected={value === selectedIcon}
              onPress={() => setSelectedIcon(value)}
              style={{ marginVertical: 5 }}
            />
          );
        })}
      </ScrollView>
      <AppButton
        onPress={() => {
          selectedIcon &&
            navigation.navigate("create-scene-name", {
              selectedIcon: selectedIcon,
            });
        }}
        title="Next"
        disabled={!selectedIcon}
      />
    </CreateSceneContainer>
  );
};

const styles = StyleSheet.create({
  icons: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
});

export default CreateSceneIcon;
