import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const RoomScreenHeader = ({name}) => {
  const rooms = {
    kitchen: require('../assets/kitchen.jpg'),
    'living room': require('../assets/living-room.jpg'),
    bathroom: require('../assets/bathroom.jpg'),
    bedroom: require('../assets/bedroom.jpg'),
  };
  return (
    <View style={styles.container}>
      <Image style={styles.container} source={rooms[name]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RoomScreenHeader;
