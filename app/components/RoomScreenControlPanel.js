import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import RoomScreenDevices from './RoomScreenDevices';
import RoomScreenTemperature from './RoomScreenTemperature';
import SectionTitle from './SectionTitle';

const RoomScreenControlPanel = () => {
  return (
    <View style={styles.container}>
      <RoomScreenDevices />
      <RoomScreenTemperature />
      <View style={{flex: 1.5}}>
        <SectionTitle title="Humidity" />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 40,
            fontWeight: 'bold',
            paddingTop: 15,
          }}
        >
          45%
        </Text>
      </View>
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
