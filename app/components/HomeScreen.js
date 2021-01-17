import React from "react";
import { StyleSheet } from "react-native";
import Header from "./Header";
import Scenes from "./Scenes";
import Rooms from "./Rooms";
import { ScrollView } from "react-native-gesture-handler";
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    padding: 15,
  }
});

export default HomeScreen;
