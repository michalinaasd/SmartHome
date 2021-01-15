import React from "react";
import { StyleSheet, View } from "react-native";
import { backgroundColor } from "../constants";
import RoomScreenControlPanel from "./RoomScreenControlPanel";
import RoomScreenHeader from "./RoomScreenHeader";

const RoomScreen = ({ navigation, route }) => {
  const { name, roomID, service, image } = route.params;

  return (
    <View style={styles.container}>
      <RoomScreenHeader
        name={name}
        navigation={navigation}
        image={image}
        service={service}
        roomID={roomID}
      />
      <RoomScreenControlPanel roomID={roomID} service={service} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
});
export default RoomScreen;
