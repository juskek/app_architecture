
import { createContext } from "react";
import { UserRepository } from "./UserRepository";
import Constants from 'expo-constants';

export abstract class IUserRepository {

    private static _instance: IUserRepository;
    static get instance(): IUserRepository {
        if (!this._instance) {
            switch (Constants.expoConfig?.extra?.env) {
                case 'main':
                    this._instance = new UserRepository();
                    break;

                default:
                    throw new Error(`Unimplemented environment: ${Constants.expoConfig?.extra?.env}`);
            }
        }
        return this._instance;
    }

    abstract getName(): Promise<string>;
}
