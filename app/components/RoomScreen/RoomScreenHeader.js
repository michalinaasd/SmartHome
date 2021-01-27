import React from "react";
import { ImageBackground } from "react-native";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { roomsImages } from "../constants";

const RoomScreenHeader = ({ navigation, roomID, service, image, name }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          height: "100%",
          width: "100%",
          alignItems: "flex-end",
        }}
        source={image ? { uri: image } : roomsImages[name]}
      >
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() =>
            navigation.navigate("picture-picker", {
              id: roomID,
              service: service,
            })
          }
        >
          <MaterialCommunityIcons name="camera" color="white" size={40} />
        </TouchableOpacity>
      </ImageBackground>
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
