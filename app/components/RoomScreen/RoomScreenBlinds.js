import React, { useState } from "react";
import { View } from "react-native";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { backgroundColor } from "../constants";
import SectionTitle from "../SectionTitle";

const RoomScreenBlinds = () => {
  return (
    <View style={{ flex: 4 }}>
      <SectionTitle title="Blinds control" />
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          UP
        </Text>
        <TouchableOpacity style={{ margin: 18 }}>
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 50,
              width: 85,
              height: 85,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialCommunityIcons
              name="arrow-up"
              color={backgroundColor}
              size={70}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ margin: 18 }}>
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 50,
              width: 85,
              height: 85,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialCommunityIcons
              name="arrow-down"
              color={backgroundColor}
              size={70}
            />
          </View>
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          DOWN
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RoomScreenBlinds;
