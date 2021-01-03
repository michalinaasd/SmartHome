import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Slider from '@react-native-community/slider';
import SectionTitle from '../SectionTitle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RoomScreenLamp = () => {
    const [targetValue, setTargetValue] = useState(0);

    return (
        <View>
            <SectionTitle title="Lamp brightness" />
            <View style={styles.sliderContainer}>
                <MaterialCommunityIcons name="lightbulb-outline" color="rgb(0,0,0)" size={30} />
                <Slider
                    style={[styles.slider, { width: 200, height: 40 }]}
                    minimumValue={0}
                    step={1}
                    maximumValue={100}
                    minimumTrackTintColor="rgb(0, 150, 136)"
                    maximumTrackTintColor="#777"
                    onValueChange={value => setTargetValue(value)}
                />
                <MaterialCommunityIcons name="lightbulb-on" color="rgb(0,0,0)" size={30} />
            </View>
            <Text style={styles.sliderValue}>{targetValue}%</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    sliderContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    slider: {
        marginLeft: 8,
        marginRight: 8
    },
    sliderValue: {
        textAlign: 'center'
    }
})

export default RoomScreenLamp;