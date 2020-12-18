import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { backgroundColor } from "./constants";

const SceneItem = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View
        style={[
          styles.container,
          props.selected && styles.selected,
          props.style,
        ]}
      >
        <MaterialCommunityIcons
          name={props.icon}
          color={backgroundColor}
          size={40}
        />
        {props.name && <Text style={styles.name}>{props.name}</Text>}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: 30,
    marginHorizontal: 5,
    paddingVertical: 18,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  name: {
    fontSize: 15,
    color: backgroundColor,
  },
  selected: {
    backgroundColor: "white",
  },
});

export default SceneItem;
