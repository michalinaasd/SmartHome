import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import RoomItem from './RoomItem';

const Rooms = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rooms</Text>
      <View style={styles.rooms}>
        <RoomItem name="kitchen" />
        <RoomItem name="living room" />
        <RoomItem name="bedroom" />
        <RoomItem name="bathroom" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '59%',
    backgroundColor: 'white',
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  rooms: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    paddingBottom: 5,
  },
});

export default Rooms;
