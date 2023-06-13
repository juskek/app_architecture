import { ICounterRepository } from "./ICounterRepository";

export class CounterRepository implements ICounterRepository{  
    private _count: number = 0;

    get count(): number {
        return this._count;
    }

    increment(): void {
        this._count++;
        console.log(`Count is now ${this._count}`)
    }
}