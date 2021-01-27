import React from "react";
import { StyleSheet } from "react-native";
import Header from "../Header";
import { ScrollView } from "react-native-gesture-handler";
import { backgroundColor } from "../constants";
import SectionTitle from "../SectionTitle";
import MeasuringDeviceList from "../MeasuringDevice/MeasuringDeviceList";

const StatsScreen = ({ route, navigation }) => {
  const { service } = route.params;

  return (
    <ScrollView style={styles.container}>
      <SectionTitle title="Statistics" style={styles.title} />
      <MeasuringDeviceList navigation={navigation} service={service} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    padding: 15,
  },
  title: {
    paddingTop: 20,
    marginBottom: 32,
  },
});

export default StatsScreen;
