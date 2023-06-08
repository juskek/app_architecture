
// Create functional component for UsersScreen

import { View } from 'react-native';
import { UsersList } from './UsersList';

export const UsersScreen = () => {
    return (
        <View>
            <UsersList />
        </View>
    );
}