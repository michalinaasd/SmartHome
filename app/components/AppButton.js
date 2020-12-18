import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { backgroundColor } from "./constants";

const AppButton = ({ onPress, title, disabled }) => {
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      style={[
        styles.appButtonContainer,
        disabled && { opacity: 0.5, backgroundColor: "gray" },
      ]}
      disabled={disabled}
    >
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: backgroundColor,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default AppButton;
