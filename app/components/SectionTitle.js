import React from "react";
import { Text, StyleSheet } from "react-native";

const SectionTitle = (props) => {
  return <Text style={[styles.title, props.style]}>{props.title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "700",
    paddingVertical: 5,
    color: "rgb(255,255,255)",
  },
});

export default SectionTitle;
