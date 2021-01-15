import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

const RoomScreenControlItem = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.onPress(props.name, props.id)}>
        <View style={[styles.icon, { backgroundColor: `${props.color}` }]}>
          <MaterialCommunityIcon name={props.icon} color="white" size={45} />
        </View>
      </TouchableOpacity>
      <Text style={styles.name}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: 90,
    height: 150,
    alignItems: "center",
  },
  icon: {
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  name: {
    fontSize: 15,
    textAlign: "center",
  },
});

export default RoomScreenControlItem;
