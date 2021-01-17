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
        paddingVertical: 8,
        marginVertical: 8,
        paddingLeft: 8,
        elevation: 2,
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#fff"
    },
    deviceItemName: {
        color: "#fff"
    }
});

export default MeasuringDeviceItem;
