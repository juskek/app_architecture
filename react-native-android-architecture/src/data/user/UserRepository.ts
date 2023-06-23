import { useState } from "react";
import { IUserRepository } from "./IUserRepository";
import { UserLocalDataSource } from "./UserLocalDataSource";
import { UserRemoteDataSource } from "./UserRemoteDataSource";

export class UserRepository implements IUserRepository{  
    private userLocalDataSource: UserLocalDataSource = new UserLocalDataSource();
    private userRemoteDataSource: UserRemoteDataSource = new UserRemoteDataSource();
    async getName(): Promise<string> {
        let name : string | null = null;

        try {
            name = await this.userRemoteDataSource.getName();
            this.userLocalDataSource.setName(name!);
        } catch (e: unknown) {
            name = this.userLocalDataSource.getName();
        }

        if (name === null) {
            throw Error('name is undefined');
        }
        return name;
    }
}