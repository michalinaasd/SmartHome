import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import RoomScreen from './RoomScreen';
import {rooms} from './constants';

const Stack = createStackNavigator();

const HomeScreenNavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      {rooms.map((name) => (
        <Stack.Screen key={name} name={name} options={{headerShown: false}}>
          {(props) => <RoomScreen name={name} />}
        </Stack.Screen>
      ))}
    </Stack.Navigator>
  );
};

export default HomeScreenNavigationStack;
