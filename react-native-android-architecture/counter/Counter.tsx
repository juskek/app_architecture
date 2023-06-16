import { useContext } from "react";

import {  Button, Text, View } from 'react-native';
import { CounterViewModel } from "./CounterViewModel";



export default function Counter() {
    const {
        count,
        increment
    } = CounterViewModel();

    return (
        <View>
            {/* viewModel.count is not updating even though it is changing in the repository */}
            <Text>{count}</Text>
            
            <Button title="Increment" onPress={increment} />
        </View>
    );
}