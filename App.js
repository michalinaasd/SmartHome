import { NavigationContainer } from "@react-navigation/native";
import { BottomMenu } from "./app/components/BottomMenu";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginPage from "./app/components/LoginPage";
import { currentUser } from "./app/api/ApiService";
import ApiService from "./app/api/ApiService";

const Drawer = createDrawerNavigator();

export let user;

currentUser.subscribe((x) => {
  user = x;
});

export default function App(...params) {
  const service = new ApiService();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Login">
          {(props) => <LoginPage {...props} service={service} />}
        </Drawer.Screen>
        <Drawer.Screen name="Home">
          {(props) => <BottomMenu {...props} service={service} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
