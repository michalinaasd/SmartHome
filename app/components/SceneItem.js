import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { backgroundColor } from "./constants";

const SceneItem = (props) => {
  if (props.deleteScene) {
    return (
      <>
        <View style={[styles.container, styles.deleteContainer]}>
          <TouchableWithoutFeedback
            style={styles.deleteIcon}
            onPress={props.onDelete}
          >
            <MaterialCommunityIcons name="minus" color="white" size={25} />
          </TouchableWithoutFeedback>
          <View style={{ top: -10, alignItems: "center" }}>
            <MaterialCommunityIcons
              name={props.icon}
              color={backgroundColor}
              size={30}
            />
            {props.name && (
              <Text style={[styles.name, { fontSize: 12 }]}>{props.name}</Text>
            )}
          </View>
        </View>
      </>
    );
  } else {
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
          ]}
        >
          <MaterialCommunityIcons
            name={props.icon}
            color={backgroundColor}
            size={30}
          />
          {props.name && <Text style={styles.name}>{props.name}</Text>}
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: 30,
    marginHorizontal: 5,
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
  deleteContainer: {
    width: 80,
    height: 80,
    backgroundColor: "white",
    margin: 10,
  },
  deleteIcon: {
    width: 25,
    height: 25,
    backgroundColor: "red",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    top: -10,
    right: -24,
  },
});

export default SceneItem;
