import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const MeasuringDeviceItem = ({ name, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.deviceItem}>
                <Text style={styles.deviceItemName}>{name}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    deviceItem: {
        width: "100%",
        paddingVertical: 10,
        marginVertical: 10,
        elevation: 10,
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#fff"
    },
    deviceItemName: {
        color: "#fff"
    }
});

export default MeasuringDeviceItem;
