import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { roomsImages } from "../constants";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const RoomScreenHeader = ({ name }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.container} source={roomsImages[name]} />
      <TouchableOpacity
        style={{ top: -10 }}
        onPress={() => navigation.navigate("picture-picker")}
      >
        <MaterialCommunityIcons name="camera" color="white" size={45} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
  },
});

export default RoomScreenHeader;
