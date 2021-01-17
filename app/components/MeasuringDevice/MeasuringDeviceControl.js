import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { padStart } from "lodash";

const lastCount = 10;

const MeasuringDeviceControl = ({ deviceId, service }) => {
    const [labels, setLabels] = useState([""]);
    const [datasets, setDatasets] = useState([0]);

    useEffect(() => {
        service.getMeasuringDevice(deviceId).then((response) => {
            // Last N
            // const measures = response.slice(Math.max(response.length - lastCount, 0));
            // First N
            const measures = response.slice(0, lastCount);

            const labels = measures.map((measure) => {
                const date = new Date(measure.measure_date);

                return `${padStart(date.getHours(), 2, "0")}:${padStart(date.getMinutes(), 2, "0")}`;
            });

            setLabels(labels);

            const values = measures.map((measure) =>
                parseFloat(measure.measure_value)
            );

            setDatasets(values);
        });
    }, []);

    return (
        <View>
            <ScrollView horizontal={true}>
                <LineChart
                    data={{
                        labels: labels,
                        datasets: [
                            {
                                data: datasets,
                            },
                        ],
                    }}
                    width={Dimensions.get("window").width - 60}
                    height={300}
                    verticalLabelRotation={45}
                    chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#fb8c00",
                        backgroundGradientTo: "#ffa726",
                        propsForHorizontalLabels: {
                            fontWeight: 100
                        },
                        color: (opacity = 1) =>
                            `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) =>
                            `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 8,
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726",
                        },
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 0,
                    }}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default MeasuringDeviceControl;
