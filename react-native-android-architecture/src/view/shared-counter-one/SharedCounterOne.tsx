import { useContext } from "react";

import { Button, Text, View } from 'react-native';
import { SharedCounterOneViewModel } from "./SharedCounterOneViewModel";

export default function SharedCounterOne() {
    const {
        count,
        increment
    } = SharedCounterOneViewModel();

    return (
        <View>
            <Text>SharedCounterOne</Text>
            <Text>{count}</Text>
            <Button title="Increment from SharedCounterOne" onPress={increment} />
        </View>
    );
}