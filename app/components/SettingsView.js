import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { backgroundColor } from "./constants";

import { TouchableOpacity } from "react-native";

const SettingsView = ({ route, navigation }) => {
  const { service } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        title="Log out"
        style={styles.logOut}
        onPress={() => {
          navigation.navigate("Home");
          service.logout().then(() => {
            navigation.navigate("Login");
          });
        }}
      >
        <Text style={styles.buttonLoginText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    padding: 15,
  },
  logOut: {
    width: 240,
    height: 45,
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,0.7)",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 40,
    marginTop: "auto",
  },
  buttonLoginText: {
    color: backgroundColor,
    fontWeight: "700",
  },
});

export default SettingsView;
