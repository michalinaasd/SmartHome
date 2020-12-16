import { NavigationContainer } from "@react-navigation/native";
import { BottomMenu } from "./app/components/BottomMenu";
import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginPage from "./app/components/LoginPage";
import { createStackNavigator } from "@react-navigation/stack";
import {
  getUser,
  removeUser,
  STORAGE_JWT_ACCESS,
} from "./app/core/api/AuthService";
import AuthService from "./app/core/api/AuthService";

import { removeStorageItem } from "./app/core/helpers/storage";

const Drawer = createDrawerNavigator();
const AuthContext = React.createContext();
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

        {!isLoggedIn && (
          <Stack.Screen
            name="Login"
            component={LoginPage}
            initialParams={{ service: service }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
