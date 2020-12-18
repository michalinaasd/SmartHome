import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import RoomItem from "./RoomItem";
import SectionTitle from "./SectionTitle";

const Rooms = ({ service, navigation }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    const promise = service.getData("/api/rooms/");
    promise.then((res) => setData(res));
  }, []);

  return (
    <View style={styles.container}>
      <SectionTitle title="Rooms" />
      <View style={styles.rooms}>
        {Object.values(data).map(({ name, id }) => (
          <RoomItem
            key={id}
            name={name}
            onPress={() =>
              navigation.navigate("room", {
                name: name,
                roomID: id,
                service: service,
              })
            }
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "column",
  },
  rooms: {
    flexDirection: "column",
  },
});

export default Rooms;
