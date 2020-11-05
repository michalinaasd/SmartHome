import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {roomsImages} from './constants';

const RoomItem = ({name, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <ImageBackground
        style={styles.roomsItem}
        imageStyle={{borderRadius: 20}}
        source={roomsImages[name]}
      />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  roomsItem: {
    width: 180,
    height: 160,
    marginVertical: 10,
    elevation: 10,
  },
});

export default RoomItem;
