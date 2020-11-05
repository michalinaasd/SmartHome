import React from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const RoomItem = ({name, onPress}) => {
  const rooms = {
    kitchen: require('../assets/kitchen.jpg'),
    'living room': require('../assets/living-room.jpg'),
    bathroom: require('../assets/bathroom.jpg'),
    bedroom: require('../assets/bedroom.jpg'),
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <ImageBackground
        style={styles.roomsItem}
        imageStyle={{borderRadius: 20}}
        source={rooms[name]}
      ></ImageBackground>
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
