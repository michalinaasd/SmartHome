import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
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
        {Object.values(data).map(({ name, id, icon }) => {
          console.log(id);
          return (
            <RoomItem
              key={id}
              name={name}
              image={icon}
              onPress={() => {
                navigation.navigate("room", {
                  name: name,
                  image: icon,
                  roomID: id,
                  service: service,
                });
              }}
            />
          );
        })}
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
