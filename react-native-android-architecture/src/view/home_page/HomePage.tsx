import { useContext } from "react";
import { HomePageViewModel } from "./HomePageViewModel";

import {  Button, Text, View } from 'react-native';



export default function HomePage() {
    // 2. Use the context
    // The first time this is called, there is no Provider so the default value is used
    const viewModel = useContext(HomePageViewModel);

    return (
        <View>
            {/* viewModel.count is not updating even though it is changing in the repository */}
            <Text>{viewModel.count}</Text>
            <Button title="Increment" onPress={viewModel.increment} />
        </View>
    );
}