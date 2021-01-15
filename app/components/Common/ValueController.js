import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ValueController = (params) => {
  const step = params.step || 1;

  const [currentValue, setCurrentValue] = useState(params.value);
  const [targetValue, setTargetValue] = useState(params.targetValue);
  const [isMin, setIsMin] = useState(params.targetValue <= params.min);
  const [isMax, setIsMax] = useState(params.targetValue >= params.max);

  useEffect(() => {
    let measuringDeviceId;
    const promise = params.service.getDeviceState(params.id);
    promise.then((res) => {
      measuringDeviceId = res.measuring_device;
      setTargetValue(parseInt(res.state_value));
      params.service.getMeasurment(measuringDeviceId).then((res) => {
        setCurrentValue(res.last_measure_value);
      });
    });
  }, []);

  const changeTargetValue = (value) => {
    var newValue = parseFloat(targetValue) + parseInt(value) * step;

    setIsMax(false);
    setIsMin(false);

    if (newValue <= params.min) {
      newValue = params.min;

      setIsMin(true);
    }

    if (newValue >= params.max) {
      newValue = params.max;

      setIsMax(true);
    }

    setTargetValue(newValue);
    params.service.setDeviceValue(params.id, newValue);
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "column", textAlign: "center" }}>
        <Text
          style={{
            fontSize: 40,
            textAlign: "center",
          }}
        >
          {currentValue}
          {params.suffix}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 60,
          }}
        >
          <TouchableOpacity
            style={[styles.buttonContainer, isMin && styles.buttonDisabled]}
            disabled={isMin}
            onPress={() => changeTargetValue(-1)}
          >
            <View>
              <MaterialCommunityIcons name="minus" color="#607D8B" size={40} />
            </View>
          </TouchableOpacity>

          <View style={styles.controllerContainer}>
            <MaterialCommunityIcons
              name={params.icon}
              color="#607D8B"
              size={70}
            />
          </View>

          <TouchableOpacity
            style={[styles.buttonContainer, isMax && styles.buttonDisabled]}
            disabled={isMax}
            onPress={() => changeTargetValue(1)}
          >
            <View>
              <MaterialCommunityIcons name="plus" color="#607D8B" size={40} />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.value}>
          {targetValue}
          {params.suffix}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    marginTop: 20,
  },
  controllerContainer: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderRadius: 50,
    elevation: 5,
  },
  buttonDisabled: {
    backgroundColor: "#999999",
  },
  value: {
    textAlign: "center",
    paddingTop: 16,
    paddingBottom: 24,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ValueController;
