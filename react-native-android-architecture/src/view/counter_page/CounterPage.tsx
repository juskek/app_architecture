import { useContext } from "react";

import {  Button, Text, View } from 'react-native';
import { useCounterPage } from "./useCounterPage";



export default function CounterPage() {
    const {
        count,
        increment
    } = useCounterPage();

    return (
        <View>
            {/* viewModel.count is not updating even though it is changing in the repository */}
            <Text>{count}</Text>
            
            <Button title="Increment" onPress={increment} />
        </View>
    );
}