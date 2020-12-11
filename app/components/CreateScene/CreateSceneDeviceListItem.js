import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const CreateSceneDeviceListItem = ({ id, onSelect, onUnselect }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        isChecked ? onUnselect(id) : onSelect(id);
        setIsChecked(!isChecked);
      }}
    >
      <View
        style={[
          styles.item,
          { backgroundColor: isChecked ? "gray" : "#e3e3e3" },
        ]}
      >
        <Text style={styles.itemText}>{id}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 50,
    marginVertical: 5,
    elevation: 5,
    borderRadius: 10,
    borderColor: "gray",
  },
  itemText: {
    marginVertical: "auto",
    paddingHorizontal: 10,
    fontSize: 20,
  },
});

export default CreateSceneDeviceListItem;
