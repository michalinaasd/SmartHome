import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './HomeScreen';
import RoomScreen from './RoomScreen';
import HomeScreenNavigationStack from './HomeScreenNavigationStack';

const Tab = createMaterialBottomTabNavigator();

const BottomMenu = () => {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff" shifting={true}>
      <Tab.Screen
        name="Home"
        component={HomeScreenNavigationStack}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Stats"
        component={RoomScreen}
        options={{
          tabBarLabel: 'Stats',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="chart-bar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarColor: '#694fad',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cogs" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomMenu;
