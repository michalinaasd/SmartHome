import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ValueController = (params) => {
    const icon = params.icon;
    const min = params.min;
    const max = params.max;
    const step = params.step || 1;
    const suffix = params.suffix;

    const [currentValue, setCurrentValue] = useState(params.value);
    const [targetValue, setTargetValue] = useState(params.targetValue);
    const [isMin, setIsMin] = useState(targetValue <= min);
    const [isMax, setIsMax] = useState(targetValue >= max);

    const changeTargetValue = (value) => {
        var newValue = parseFloat(targetValue) + (parseInt(value) * step);

        setIsMax(false);
        setIsMin(false);

        if (newValue <= min) {
            newValue = min;

            setIsMin(true);
        }

        if (newValue >= max) {
            newValue = max;

            setIsMax(true);
        }

        setTargetValue(newValue);
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'column', textAlign: 'center' }}>
                <Text
                    style={{
                        fontSize: 40,
                        textAlign: 'center',
                    }}
                >
                    {currentValue}{suffix}
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: 60,
                    }}
                >
                    <TouchableOpacity style={[styles.buttonContainer, isMin ? styles.buttonDisabled : {}]} disabled={isMin} onPress={() => changeTargetValue(-1)}>
                        <View>
                            <MaterialCommunityIcons name="minus" color="#607D8B" size={40} />
                        </View>
                    </TouchableOpacity>

                    <View style={styles.controllerContainer}>
                        <MaterialCommunityIcons
                            name={icon}
                            color="#607D8B"
                            size={70}
                        />
                    </View>

                    <TouchableOpacity style={[styles.buttonContainer, isMax ? styles.buttonDisabled : {}]} disabled={isMax} onPress={() => changeTargetValue(1)}>
                        <View>
                            <MaterialCommunityIcons name="plus" color="#607D8B" size={40} />
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.value}>{targetValue}{suffix}</Text>
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
    buttonDisabled: {
        backgroundColor: '#999999'
    },
    value: {
        textAlign: 'center',
        paddingTop: 16,
        paddingBottom: 24,
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default ValueController;
