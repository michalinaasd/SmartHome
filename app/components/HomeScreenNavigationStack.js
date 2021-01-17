import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import RoomScreen from "./RoomScreen/RoomScreen";
import CreateSceneIcon from "./CreateScene/CreateSceneIcon";
import CreateSceneName from "./CreateScene/CreateSceneName";
import CreateSceneDevices from "./CreateScene/CreateSceneDevices";
import CreateSceneDevicesStates from "./CreateScene/CreateSceneDevicesStates";
import CameraModule from "./PicturePicker";

const Stack = createStackNavigator();

const HomeScreenNavigationStack = ({ route }) => {
  const { service } = route.params;

  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="home"
        component={HomeScreen}
        initialParams={{ service: service }}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="room"
        component={RoomScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="create-scene"
        component={CreateSceneIcon}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="create-scene-name"
        component={CreateSceneName}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="create-scene-devices"
        initialParams={{ service: service }}
        component={CreateSceneDevices}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="create-scene-devices-states"
        initialParams={{ service: service }}
        component={CreateSceneDevicesStates}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="picture-picker"
        component={CameraModule}
        initialParams={{ service: service }}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeScreenNavigationStack;
