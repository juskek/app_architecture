import { useState } from "react";
import { ICounterRepository } from "./ICounterRepository";

export class CounterRepository implements ICounterRepository{  
    private _count: number = 0;
    private _setCount: (count: number) => void = () => {};

    init(): void {
        [this._count, this._setCount] = useState(0);
    }

    get count(): number {
        return this._count;
    }

    increment(): void {
        this._setCount(this._count++);
        console.log(`Count is now ${this._count}`)
    }
}