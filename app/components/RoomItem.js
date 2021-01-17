import React from "react";
import { StyleSheet, ImageBackground, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { roomsImages } from "./constants";
import SectionTitle from "./SectionTitle";

const RoomItem = ({ name, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <ImageBackground
        style={styles.roomsItem}
        imageStyle={{
          opacity: 0.7,
          borderRadius: 10,
        }}
        source={roomsImages[name]}
      >
        <SectionTitle title={name && name.charAt(0).toUpperCase() + name.slice(1)} />
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  roomsItem: {
    width: "100%",
    height: 170,
    marginVertical: 10,
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RoomItem;
