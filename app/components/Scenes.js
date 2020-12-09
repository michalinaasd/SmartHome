import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import SceneItem from "./SceneItem";

const Scenes = ({ service, navigation }) => {
  const [data, setData] = useState("");
  useEffect(() => {
    const promise = service.getData("/api/scenes/");
    promise.then((res) => setData(res));
  }, []);

  console.log(data);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scenes</Text>
      <ScrollView
        style={styles.scenes}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {Object.values(data).map(({ icon, name, id }) => (
          <SceneItem key={id} icon={icon} name={name} />
        ))}
        <SceneItem
          icon="plus"
          name="add"
          onPress={() => navigation.navigate("create-scene")}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "20%",
    flexDirection: "column",
    paddingHorizontal: 10,
  },
  scenes: {
    flexDirection: "row",
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    paddingBottom: 5,
  },
});

export default Scenes;
