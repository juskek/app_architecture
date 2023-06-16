
import { createContext } from "react";
import { SoloCounterRepository } from "./SoloCounterRepository";
import Constants from 'expo-constants';

export abstract class ISoloCounterRepository {

    private static _instance: ISoloCounterRepository;
    static get instance(): ISoloCounterRepository {
        if (!this._instance) {
            switch (Constants.expoConfig?.extra?.env) {
                case 'main':
                    this._instance = new SoloCounterRepository();
                    break;

                default:
                    throw new Error(`Unimplemented environment: ${Constants.expoConfig?.extra?.env}`);
            }
        }
        return this._instance;
    }

    abstract count: number;

    abstract increment(): void;

}

export const SharedCounterRepositoryContext = createContext<ISoloCounterRepository>(ISoloCounterRepository.instance);