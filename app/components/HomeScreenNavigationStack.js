import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import RoomScreen from './RoomScreen/RoomScreen';
import CreateSceneIcon from './CreateSceneIcon';
import {rooms} from './constants';
import CreateSceneName from './CreateSceneName';

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
      <Stack.Screen
        name="create-scene"
        component={CreateSceneIcon}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="create-scene-name"
        component={CreateSceneName}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeScreenNavigationStack;
