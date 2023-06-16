import { useContext } from "react";

import {  Button, Text, View } from 'react-native';
import { SharedCounterTwoViewModel } from "./SharedCounterTwoViewModel";



export default function SharedCounterTwo() {
    const {
        count,
        increment
    } = SharedCounterTwoViewModel();

    return (
        <View>
            <Text>Other SharedCounterOne</Text>
            <Text>{count}</Text>
            <Button title="Increment from Other SharedCounterOne" onPress={increment} />
        </View>
    );
}