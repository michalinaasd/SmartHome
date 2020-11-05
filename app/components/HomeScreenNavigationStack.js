import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import RoomScreen from './RoomScreen';

const Stack = createStackNavigator();

const HomeScreenNavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="bathroom" options={{headerShown: false}}>
        {(props) => <RoomScreen name="bathroom" />}
      </Stack.Screen>
      <Stack.Screen name="bedroom" options={{headerShown: false}}>
        {(props) => <RoomScreen name="bedroom" />}
      </Stack.Screen>
      <Stack.Screen name="kitchen" options={{headerShown: false}}>
        {(props) => <RoomScreen name="kitchen" />}
      </Stack.Screen>
      <Stack.Screen name="living room" options={{headerShown: false}}>
        {(props) => <RoomScreen name="living room" />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeScreenNavigationStack;
