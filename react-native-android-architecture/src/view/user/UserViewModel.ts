import { useState } from "react";
import { IUserRepository } from "../../data/user/IUserRepository";

type UserPageProps = {
    username: string;
    getUsername: () => void;
}

// View
export const UserViewModel = (): UserPageProps => {
    const repository = IUserRepository.instance;
    const [username, _setUsername] = useState("");


    const getUsername = async () => {
        _setUsername(await repository.getName());
    }

    return {
        username,
        getUsername,
    }


}