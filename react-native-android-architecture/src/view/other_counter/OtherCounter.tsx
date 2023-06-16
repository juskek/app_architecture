import { useContext } from "react";

import {  Button, Text, View } from 'react-native';
import { OtherCounterViewModel } from "./OtherCounterViewModel";



export default function OtherCounter() {
    const {
        count,
        increment
    } = OtherCounterViewModel();

    return (
        <View>
            <Text>Other Counter</Text>
            <Text>{count}</Text>
            <Button title="Increment from Other Counter" onPress={increment} />
        </View>
    );
}