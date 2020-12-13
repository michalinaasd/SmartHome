import React, { useState } from 'react';
import {
    Text,
    View
} from 'react-native';
import Slider from '@react-native-community/slider';
import RoomScreenTemperature from './RoomScreenTemperature';

const RoomScreenLamp = () => {
    const [targetValue, setTargetValue] = useState(0);

    return (
        <View>
            <Text>Lamp brightness</Text>
            <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={0}
                step={1}
                maximumValue={100}
                minimumTrackTintColor="rgb(0, 150, 136)"
                maximumTrackTintColor="#777"
                onValueChange={value => setTargetValue(value)}
            />
            <Text>{targetValue}%</Text>
        </View>
    );
};

export default RoomScreenLamp;