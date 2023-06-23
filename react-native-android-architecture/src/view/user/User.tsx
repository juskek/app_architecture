import { useContext } from "react";

import { Button, Text, View } from 'react-native';
import { UserViewModel } from "./UserViewModel";

export default function User() {
    const {
        username,
        getUsername,
    } = UserViewModel();

    return (
        <View>
            <Text>User</Text>
            <Text>{username}</Text>
            <Button title="Get username" onPress={getUsername} />
        </View>
    );
}