import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const CreateSceneDeviceListItem = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={() => setIsChecked(!isChecked)}>
      <View
        style={[styles.item, {backgroundColor: isChecked ? 'gray' : 'red'}]}
      />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 50,
    marginVertical: 5,
  },
});

export default CreateSceneDeviceListItem;
