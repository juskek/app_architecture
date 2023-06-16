import { useContext } from "react";

import { Button, Text, View } from 'react-native';
import { SoloCounterViewModel } from "./SoloCounterViewModel";

export default function SoloCounter() {
    const {
        count,
        increment
    } = SoloCounterViewModel();

    return (
        <View>
            <Text>SoloCounter</Text>
            <Text>{count}</Text>
            <Button title="Increment from SoloCounter" onPress={increment} />
        </View>
    );
}