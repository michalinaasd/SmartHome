import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { roomsImages } from "../constants";

const RoomScreenHeader = ({ navigation, roomID, service, image, name }) => {
  return (
    <View style={styles.container}>
      <Image
        style={{ height: "100%", width: "100%" }}
        source={image ? { uri: image } : roomsImages[name]}
      />

      <TouchableOpacity
        style={{ top: -10 }}
        onPress={() =>
          navigation.navigate("picture-picker", {
            id: roomID,
            service: service,
          })
        }
      >
        <MaterialCommunityIcons name="camera" color="red" size={45} />
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
