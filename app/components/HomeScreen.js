import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "./Header";
import Scenes from "./Scenes";
import Rooms from "./Rooms";

const HomeScreen = ({ route, navigation }) => {
  const { service } = route.params;

  return (
    <View style={styles.container}>
      <Header />
      <Scenes navigation={navigation} service={service} />
      <Rooms navigation={navigation} service={service} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default HomeScreen;
