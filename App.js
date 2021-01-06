import { NavigationContainer } from "@react-navigation/native";
import { BottomMenu } from "./app/components/BottomMenu";
import React, { useState } from "react";
import LoginPage from "./app/components/LoginPage";
import { createStackNavigator } from "@react-navigation/stack";
import { getUser } from "./app/core/api/AuthService";
import AuthService from "./app/core/api/AuthService";

const Stack = createStackNavigator();

export default function App(...params) {
  const service = new AuthService();

  const [isLoggedIn, setisLoggedIn] = useState(false);

  if (!isLoggedIn) {
    getUser().then((user) => {
      if (user != null) {
        setisLoggedIn(true);
      }
    });
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        initialRouteName={isLoggedIn ? "Home" : "Login"}
      >
        <Stack.Screen
          name="Home"
          component={BottomMenu}
          initialParams={{ service: service }}
        />

        <Stack.Screen
          name="Login"
          component={LoginPage}
          initialParams={{ service: service }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
