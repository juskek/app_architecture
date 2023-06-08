import { useEffect, useState } from "react";
import UserRepository, { IUser } from "../../data/user/UserRepository";
import { ApiResponse } from "../../data/base/ApiResponse";

export const UsersList = () => {
    const [users, setUsers] = useState<IUser[]>();
    useEffect(() => {
        const repository: UserRepository = new UserRepository();

        repository.getMany().then((users: ApiResponse<IUser[]>) => {
            console.log(users);
            setUsers(users.data);
        });
    }, []);

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users && users.map((user, idx) => (
                    <li key={idx}>{user.username}</li>
                ))}
            </ul>
        </div>
    );
};
