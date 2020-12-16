import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import { Directions, State } from 'react-native-gesture-handler/GestureHandler'
import Swipeable from 'react-native-gesture-handler/Swipeable'

const Rotator = () => {
    const [rotation, setRotation] = useState('')

    const handlePan = ({ nativeEvent: { x } }) => {
        setRotation(x)
    }

    return (
        <View>
            <Text>{rotation}</Text>
            <View style={styles.container}>
                <PanGestureHandler
                    direction={Directions.RIGHT | Directions.LEFT}
                    onGestureEvent={handlePan}
                >
                    <View style={{...{transform: [{ rotate: rotation + 'deg' }]}, ...styles.rotator}}>
                        <View style={styles.handle}></View>
                    </View>
                </PanGestureHandler>
            </View>
        </View>
    )
}

export default Rotator

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        backgroundColor: 'magenta',
        position: "relative"
    },
    rotator: {
        width: 100,
        height: 100,
        backgroundColor: "#fefefe",
        borderRadius: 50,
        position: "relative"
    },
    handle: {
        width: 5,
        height: 5,
        backgroundColor: 'black',
        position: 'absolute',
        top: 8,
        backgroundColor: '#000',
        left: '50%',
        marginLeft: -2,
        borderRadius: 50
    }
})
