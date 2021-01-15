import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import AppButton from "../AppButton";
import { sceneNameErrorMessage } from "../constants";
import SceneItem from "../SceneItem";
import CreateSceneContainer from "./CreateSceneContainer";

const CreateSceneName = ({ route, navigation }) => {
  const { selectedIcon } = route.params;
  const [inputValue, onChangeText] = useState("");
  const [isValid, validate] = useState(true);

  console.log(isValid);

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
          onChangeText={(text) => {
            onChangeText(text);
            validate(text.length <= 15 && text.length >= 4);
          }}
        />
        {!isValid && (
          <Text style={{ color: "red" }}>{sceneNameErrorMessage}</Text>
        )}
      </View>

      <AppButton
        title="Next"
        onPress={() => {
          navigation.navigate("create-scene-devices", {
            sceneName: inputValue,
            sceneIcon: selectedIcon,
          });
        }}
        disabled={!inputValue && isValid}
      />
    </CreateSceneContainer>
  );
};

const styles = StyleSheet.create({});

export default CreateSceneName;
