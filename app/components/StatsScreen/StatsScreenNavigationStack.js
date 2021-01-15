import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StatsScreen from "./StatsScreen";
import MeasuringDevice from "../MeasuringDevice/MeasuringDevice";

const Stack = createStackNavigator();

const StatsScreenNavigationStack = ({ route }) => {
  const { service } = route.params;

  return (
    <Stack.Navigator initialRouteName="StatsScreen">
      <Stack.Screen
        name="stats"
        component={StatsScreen}
        initialParams={{ service: service }}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="measuring-device"
        component={MeasuringDevice}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StatsScreenNavigationStack;
