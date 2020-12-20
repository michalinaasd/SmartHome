import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { backgroundColor } from "./constants";

const SceneItem = (props) => {
  return (
    <TouchableWithoutFeedback
      onPress={props.onPress}
      onLongPress={props.onLongPress}
      disabled={props.sceneLongPress}
    >
      <View
        style={[
          styles.container,
          props.selected && styles.selected,
          props.style,
          props.sceneLongPress && styles.edit,
        ]}
      >
        {props.sceneLongPress && (
          <TouchableWithoutFeedback onPress={props.onDelete}>
            <View
              style={{
                height: 25,
                width: 25,
                borderRadius: 20,
                backgroundColor: "red",
                position: "absolute",
                right: -40,
                top: -20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons name="minus" color="white" size={25} />
            </View>
          </TouchableWithoutFeedback>
        )}
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
  },
  name: {
    fontSize: 15,
    color: backgroundColor,
  },
  selected: {
    backgroundColor: "white",
  },
  edit: {
    width: 80,
    height: 80,
    backgroundColor: "white",
    margin: 10,
  },
});

export default SceneItem;
