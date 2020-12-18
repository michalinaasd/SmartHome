import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import SceneItem from "./SceneItem";
import SectionTitle from "./SectionTitle";

const Scenes = ({ service, navigation }) => {
  const [data, setData] = useState("");
  useEffect(() => {
    const promise = service.getData("/api/scenes/");
    promise.then((res) => setData(res));
  }, []);

  return (
    <View style={styles.container}>
      <SectionTitle title="Scenes" />
      <ScrollView
        style={styles.scenes}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {Object.values(data).map(({ icon, name, id }) => (
          <SceneItem key={id + name} icon={icon} name={name} />
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
    flex: 1,
    flexDirection: "column",
  },
  scenes: {
    flexDirection: "row",
  },
});

export default Scenes;
