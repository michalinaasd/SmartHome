import React from "react";
import { View, StyleSheet, Button } from "react-native";
import Header from "./Header";
import Scenes from "./Scenes";
import Rooms from "./Rooms";
import { ScrollView } from "react-native-gesture-handler";
import { backgroundColor } from "./constants";

const HomeScreen = ({ route, navigation }) => {
  const { service } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Header />
      <Scenes navigation={navigation} service={service} />
      <Rooms navigation={navigation} service={service} />
      <Button
        title="Log out"
        onPress={() => {
          service.logout();
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    padding: 15,
  },
});

export default HomeScreen;
