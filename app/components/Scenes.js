import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import SceneItem from "./SceneItem";
import SectionTitle from "./SectionTitle";

const Scenes = ({ service, navigation }) => {
  const [data, setData] = useState("");
  const [sceneEnabled, setSceneEnabled] = useState(null);
  const [sceneEdit, setSceneEdit] = useState(null);
  const isFocused = useIsFocused();

  const fetchData = () => {
    const promise = service.getData("/api/scenes/");
    promise.then((res) => {
      setSceneEnabled(
        Object.values(res).filter(({ is_active }) => is_active)[0]?.id
      );
      setData(res);
    });
  };

  useEffect(() => {
    fetchData();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <SectionTitle title="Scenes" />
      <ScrollView
        style={styles.scenes}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {Object.values(data).map(({ icon, name, id }) => {
          return (
            <SceneItem
              key={id}
              icon={icon}
              name={name}
              onPress={() => {
                sceneEnabled && service.setSceneState(sceneEnabled, "False");
                if (sceneEnabled != id) {
                  setSceneEnabled(id);
                  service.setSceneState(id, "True");
                } else {
                  setSceneEnabled(null);
                }
              }}
              onLongPress={() => {
                setSceneEdit(id);
              }}
              onDelete={() => {
                service.deleteScene(id).then(() => fetchData());
              }}
              selected={sceneEnabled === id}
              sceneLongPress={sceneEdit === id}
            />
          );
        })}
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
