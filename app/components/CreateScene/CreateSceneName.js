import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import AppButton from "../AppButton";
import SceneItem from "../SceneItem";
import SectionTitle from "../SectionTitle";
import CreateSceneContainer from "./CreateSceneContainer";

const CreateSceneName = ({ route, navigation }) => {
  const { selectedIcon } = route.params;
  const [inputValue, onChangeText] = useState("");

  return (
    <CreateSceneContainer title="Create name">
      <View style={{ flex: 1, alignItems: "center" }}>
        <SceneItem icon={selectedIcon} selected={true} />
        <TextInput
          style={{
            height: 40,
            width: "90%",
            borderBottomWidth: 2,
            color: "white",
            borderColor: "white",
          }}
          placeholder="Name"
          value={inputValue}
          onChangeText={(text) => onChangeText(text)}
        />
      </View>
      <AppButton
        title="Next"
        onPress={() => {
          navigation.navigate("create-scene-devices", {
            sceneName: inputValue,
            sceneIcon: selectedIcon,
          });
        }}
        disabled={!inputValue}
      />
    </CreateSceneContainer>
  );
};

const styles = StyleSheet.create({});

export default CreateSceneName;
