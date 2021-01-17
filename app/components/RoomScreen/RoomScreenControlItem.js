import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

const RoomScreenControlItem = ({ name, icon, color }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.icon, { backgroundColor: `${color}` }]}>
        <MaterialCommunityIcon name={icon} color="white" size={45} />
      </View>
      <Text style={styles.name}>{name}</Text>
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
    fontSize: 14,
    textAlign: "center",
    color: "#fff",
  },
});

export default RoomScreenControlItem;
