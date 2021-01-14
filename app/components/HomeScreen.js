import React from "react";
import { StyleSheet, Text } from "react-native";
import Header from "./Header";
import Scenes from "./Scenes";
import Rooms from "./Rooms";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { backgroundColor } from "./constants";
import { StatusBar } from "react-native";

const HomeScreen = ({ route, navigation }) => {
  const { service } = route.params;

  return (
    <ScrollView style={styles.container}>
      <StatusBar hidden />
      <Header />
      <Scenes navigation={navigation} service={service} />
      <Rooms navigation={navigation} service={service} />
      <TouchableOpacity
        title="Log out"
        style={styles.logOut}
        onPress={() => {
          service.logout().then(() => {
            navigation.navigate("Login");
          });
        }}
      >
        <Text styles={styles.buttonLogin}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    padding: 15,
  },
  logOut: {
    width: 120,
    height: 45,
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,0.7)",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 40,
    marginTop: 20,
  },
});

export default HomeScreen;
