import { NavigationContainer } from "@react-navigation/native";
import { BottomMenu } from "./app/components/BottomMenu";
import React, { useEffect, useState } from "react";
import LoginPage from "./app/components/LoginPage";
import { createStackNavigator } from "@react-navigation/stack";
import { getUser } from "./app/core/api/AuthService";
import AuthService from "./app/core/api/AuthService";

import CameraModule from "./app/components/PicturePicker";

const Stack = createStackNavigator();

export default function App() {
  const service = new AuthService();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    getUser().then((user) => {
      if (user != null) {
        setIsLoggedIn(true);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn && (
        <Stack.Navigator headerMode="none" initialRouteName="Home">
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
      )}

      {!isLoggedIn && (
        <Stack.Navigator headerMode="none" initialRouteName="Login">
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
      )}
    </NavigationContainer>
  );
}
