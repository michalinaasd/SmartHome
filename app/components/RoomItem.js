import React from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';

const RoomItem = ({name}) => {
  const rooms = {
    kitchen: require('../assets/kitchen.jpg'),
    'living room': require('../assets/living-room.jpg'),
    bathroom: require('../assets/bathroom.jpg'),
    bedroom: require('../assets/bedroom.jpg'),
  };
  return (
    <ImageBackground
      style={styles.roomsItem}
      imageStyle={{borderRadius: 20}}
      source={rooms[name]}
    ></ImageBackground>
  );
};

const styles = StyleSheet.create({
  roomsItem: {
    width: 180,
    height: 170,
    marginVertical: 5,
    elevation: 10,
  },
});

export default RoomItem;
