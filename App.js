import {NavigationContainer} from '@react-navigation/native';
import {BottomMenu} from './app/components/BottomMenu';
import React, { useState } from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LoginPage from './app/components/LoginPage';
import {render} from 'react-dom';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import { currentUser } from './app/api/ApiService';

const Drawer = createDrawerNavigator();
const AuthContext = React.createContext();
const Stack = createStackNavigator();

export let user;

currentUser.subscribe(x => {
  user=x;
})

export default function App(...params) {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={user!=null ? "Home" : "Login"}>
        <Drawer.Screen name="Login" component={LoginPage} />
        <Drawer.Screen name="Home" component={BottomMenu} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
