import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RoomScreenDevices from './RoomScreenDevices';
import RoomScreenTemperature from './RoomScreenTemperature';
import SectionTitle from '../SectionTitle';
import RoomScreenLamp from './RoomScreenLamp';

const RoomScreenControlPanel = () => {
  return (
    <View style={styles.container}>
      <RoomScreenDevices />
      {/* <RoomScreenTemperature /> */}
      <RoomScreenLamp />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    padding: 10,
  },
});

export default RoomScreenControlPanel;
