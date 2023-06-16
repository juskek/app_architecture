
import { createContext } from "react";
import { SharedCounterRepository } from "./SharedCounterRepository";
import Constants from 'expo-constants';
import { CounterListener } from "./SharedCounterListener";

// Defined as abstract class instead of interface to allow for static methods
export abstract class ISharedCounterRepository {

    private static _instance: ISharedCounterRepository;
    static get instance(): ISharedCounterRepository {
        if (!this._instance) {
            switch (Constants.expoConfig?.extra?.env) {
                case 'main':
                    this._instance = new SharedCounterRepository();
                    break;

                default:
                    throw new Error(`Unimplemented environment: ${Constants.expoConfig?.extra?.env}`);
            }
        }
        return this._instance;
    }

    abstract count: number;

    abstract increment(): void;

    abstract addListener(listener: CounterListener): void;
    abstract removeListener(listener: CounterListener): void;
    abstract notifyListeners(): void;

}

export const SharedCounterRepositoryContext = createContext<ISharedCounterRepository>(ISharedCounterRepository.instance);