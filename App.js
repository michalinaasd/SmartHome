import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomMenu from './app/components/BottomMenu';
import HomeScreen from './app/components/HomeScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={BottomMenu} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
