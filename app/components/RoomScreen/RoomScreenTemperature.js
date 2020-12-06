import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SectionTitle from '../SectionTitle';

const RoomScreenTemperature = () => {

  //TODO: pobieranie temperatury z czujnika i zadanej temperatury
  const [currentTemperature, setCurrentTemperature] = useState(23);
  const [targetTemperature, setTargetTemperature] = useState(25);

  const changeTargetTemperature = (value) => {
    setTargetTemperature(targetTemperature + parseInt(value));
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'column', textAlign: 'center'}}>
        <SectionTitle title="Set target temperature" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 60,
          }}
        >
          <TouchableOpacity style={styles.buttonContainer} onPress={() => changeTargetTemperature(-1)}>
            <View>
              <MaterialCommunityIcons name="minus" color="#607D8B" size={40} />
            </View>
          </TouchableOpacity>

          <View style={styles.thermometerContainer}>
            <MaterialCommunityIcons
              name="thermometer"
              color="#607D8B"
              size={70}
            />
          </View>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => changeTargetTemperature(1)}>
            <View>
              <MaterialCommunityIcons name="plus" color="#607D8B" size={40} />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.temperature}>{targetTemperature}°C</Text>
        <SectionTitle title="Current temperature" />
        <Text
          style={{
            fontSize: 40,
            textAlign: 'center',
          }}
        >
          {currentTemperature}°C
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 4 },
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
    paddingTop: 16,
    paddingBottom: 24,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default RoomScreenTemperature;
