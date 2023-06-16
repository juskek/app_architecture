import { useContext } from "react";

import { Button, Text, View } from 'react-native';
import { CounterViewModel } from "./CounterViewModel";



export default function Counter() {
    const {
        count,
        increment
    } = CounterViewModel();

    return (
        <View>
            <Text>Counter</Text>
            <Text>{count}</Text>
            <Button title="Increment from Counter" onPress={increment} />
        </View>
    );
}