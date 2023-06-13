

export interface ICounterRepository {
    get count(): number;

    increment(): void;
}