import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

const MeasuringDeviceControl = ({ deviceId, service }) => {

    const [dailyData, setDailyData] = useState("");

    useEffect(() => {
        service.getMeasuringDevice(deviceId).then(response => {
            console.log(JSON.stringify(response));
        })
    }, []);

    return (
        <View style={styles.container}>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default MeasuringDeviceControl;
