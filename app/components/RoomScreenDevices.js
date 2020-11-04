import React from 'react';
import {View, StyleSheet} from 'react-native';
import RoomScreenControlItem from './RoomScreenControlItem';
import SectionTitle from './SectionTitle';

const RoomScreenDevices = () => {
  return (
    <View style={styles.container}>
      <SectionTitle title="Devices" />
      <View style={styles.iconsContainer}>
        <RoomScreenControlItem
          name="Ceiling Lamp"
          icon="ceiling-light"
          color="#009387"
        />
        <RoomScreenControlItem
          name="Bedside Lamp"
          icon="lamp"
          color="#1f65ff"
        />
        <RoomScreenControlItem name="Blinds" icon="blinds" color="#FF4500" />
        <RoomScreenControlItem name="Humidity" icon="devices" color="#694fad" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingBottom: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default RoomScreenDevices;
