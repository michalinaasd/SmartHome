import React, { useState } from "react";
import SceneItem from "../SceneItem";
import { devicesIcons } from "../constants";

const CreateSceneDeviceListItem = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SceneItem
      icon={devicesIcons[props.name]}
      name={props.name.charAt(0).toUpperCase() + props.name.slice(1)}
      onPress={() => {
        isChecked
          ? props.onUnselect(props.id)
          : props.onSelect(props.id, props.name);
        setIsChecked(!isChecked);
      }}
      selected={isChecked}
    />
  );
};

export default CreateSceneDeviceListItem;
