import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import RoomControlItem from './RoomControlItem';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RoomControlPanel = () => {
  return (
    <View style={styles.container}>
      <View style={styles.devices}>
        <Text style={styles.title}>Devices</Text>
        <View style={styles.devicesIcons}>
          <RoomControlItem name="Ceiling Lamp" />
          <RoomControlItem name="Bedside Lamp" />
          <RoomControlItem name="Blinds" />
          <RoomControlItem name="Humidity" />
        </View>
      </View>
      <View style={{flex: 2}}>
        <Text style={styles.title}>Temperature</Text>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <MaterialCommunityIcons name="minus" color="black" size={40} />
            <MaterialCommunityIcons
              name="thermometer"
              color="lightgray"
              size={80}
              style={{paddingHorizontal: 20}}
            />
            <MaterialCommunityIcons name="plus" color="black" size={40} />
          </View>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}> 23C</Text>
        </View>
        <Text style={styles.title}>Humidity</Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 40,
            fontWeight: 'bold',
            paddingTop: 30,
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
  devices: {
    flex: 1,
  },
  devicesIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  parameters: {
    flex: 2,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    paddingBottom: 5,
  },
});

export default RoomControlPanel;
