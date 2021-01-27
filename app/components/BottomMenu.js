import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreenNavigationStack from "./HomeScreenNavigationStack";
import StatsScreenNavigationStack from "./StatsScreen/StatsScreenNavigationStack";
import SettingsView from "./SettingsView";

const Tab = createMaterialBottomTabNavigator();

const BottomMenu = ({ route }) => {
  const { service } = route.params;

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#304D6D"
      inactiveColor="gray"
      shifting={true}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreenNavigationStack}
        initialParams={{ service: service }}
        options={{
          tabBarLabel: "Home",
          tabBarColor: "rgba(237,237,237, 0.5)",

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={StatsScreenNavigationStack}
        initialParams={{ service: service }}
        options={{
          tabBarLabel: "Statistics",
          tabBarColor: "rgba(237,237,237, 0.5)",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-bar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsView}
        initialParams={{ service: service }}
        options={{
          tabBarLabel: "Settings",
          tabBarColor: "rgba(237,237,237, 0.5)",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cogs" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export { BottomMenu };
