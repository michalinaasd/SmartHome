import { NavigationContainer } from '@react-navigation/native';
import { BottomMenu } from './app/components/BottomMenu';
import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginPage from './app/components/LoginPage';
import { createStackNavigator } from '@react-navigation/stack';
import { getUser, removeUser } from './app/core/api/AuthService';

const Drawer = createDrawerNavigator();
const AuthContext = React.createContext();
const Stack = createStackNavigator();

export default function App(...params) {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  if (!isLoggedIn) {
    getUser().then(user => {
      if (user != null) {
        setisLoggedIn(true);
      }
    });
  }

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName={isLoggedIn ? "Home" : "Login"}>
        <Stack.Screen name="Home" component={BottomMenu} />
        { !isLoggedIn && <Stack.Screen name="Login" component={LoginPage} /> }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
