import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {roomsImages} from '../constants';

const RoomScreenHeader = ({name}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.container} source={roomsImages[name]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RoomScreenHeader;
