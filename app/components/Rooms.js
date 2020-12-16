import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import RoomItem from "./RoomItem";

const Rooms = ({ service, navigation }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    const promise = service.getData("/api/rooms/");
    promise.then((res) => setData(res));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rooms</Text>
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
    width: "100%",
    height: "65%",
    flexDirection: "column",
    paddingHorizontal: 10,
  },
  rooms: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    paddingBottom: 5,
  },
});

export default Rooms;
