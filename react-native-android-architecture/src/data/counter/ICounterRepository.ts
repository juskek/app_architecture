
import { CounterRepository } from "./CounterRepository";
import Constants from 'expo-constants';

// Defined as abstract class instead of interface to allow for static methods
export abstract class ICounterRepository {

    private static _instance: ICounterRepository;
    static get instance(): ICounterRepository {
        if (!this._instance) {
            switch (Constants.expoConfig?.extra?.env) {
                case 'main':
                    this._instance = new CounterRepository();
                    break;

                default:
                    throw new Error(`Unimplemented environment: ${Constants.expoConfig?.extra?.env}`);
            }
        }
        return this._instance;
    }

    abstract get count(): number;

    abstract increment(): void;
}