import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SectionTitle from '../SectionTitle';

const RoomScreenHumidity = () => {

    const [currentHumidity, setCurrentHumidity] = useState(23);
    const [targetHumidity, setTargetHumidity] = useState(25);

    const changeTargetHumidity = (value) => {
        setTargetHumidity(targetHumidity + parseInt(value));
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
                    {currentHumidity}%
        </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: 60,
                    }}
                >
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => changeTargetHumidity(-1)}>
                        <View>
                            <MaterialCommunityIcons name="minus" color="#607D8B" size={40} />
                        </View>
                    </TouchableOpacity>

                    <View style={styles.humidityContainer}>
                        <MaterialCommunityIcons
                            name="water-percent"
                            color="#607D8B"
                            size={70}
                        />
                    </View>

                    <TouchableOpacity style={styles.buttonContainer} onPress={() => changeTargetHumidity(1)}>
                        <View>
                            <MaterialCommunityIcons name="plus" color="#607D8B" size={40} />
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.humidity}>{targetHumidity}%</Text>
                {/* <SectionTitle title="Current humidity" /> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 4,
        marginTop: 20,
    },
    humidityContainer: {
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
    humidity: {
        textAlign: 'center',
        paddingTop: 16,
        paddingBottom: 24,
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default RoomScreenHumidity;
