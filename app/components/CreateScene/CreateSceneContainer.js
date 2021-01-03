import React from "react";
import { View, StyleSheet } from "react-native";
import { backgroundColor } from "../constants";
import SectionTitle from "../SectionTitle";

const CreateSceneContainer = (props) => {
  return (
    <View style={styles.container}>
      <SectionTitle title={props.title} />
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: backgroundColor,
  },
});

export default CreateSceneContainer;
