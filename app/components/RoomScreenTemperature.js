import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SectionTitle from './SectionTitle';

const RoomScreenTemperature = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'column'}}>
        <SectionTitle title="Set Temperature" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 60,
          }}
        >
          <View style={styles.buttonContainer}>
            <MaterialCommunityIcons name="minus" color="#607D8B" size={40} />
          </View>
          <View style={styles.thermometerContainer}>
            <MaterialCommunityIcons
              name="thermometer"
              color="#607D8B"
              size={70}
            />
          </View>
          <View style={styles.buttonContainer}>
            <MaterialCommunityIcons name="plus" color="#607D8B" size={40} />
          </View>
        </View>
        <Text style={styles.temperature}>25°C</Text>
        <SectionTitle title="Current Temperature" />
        <Text
          style={{
            fontSize: 40,
            textAlign: 'center',
            marginVertical: 15,
          }}
        >
          23°C
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 4},
  thermometerContainer: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 50,
    elevation: 5,
  },
  temperature: {
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default RoomScreenTemperature;
