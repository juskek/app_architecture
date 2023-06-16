import { useState } from "react";
import { ICounterRepository } from "./ICounterRepository";
import { CounterObserver } from "./CounterObserver";

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
        this.notifyObservers(); // Added this line to trigger the state update which will be reflected in the UI

    }

    private observers: CounterObserver[] = [];


    addObserver(observer: CounterObserver): void {
        this.observers.push(observer);
    }
    
    removeObserver(observer: CounterObserver): void {
        const index = this.observers.indexOf(observer);
        if (index !== 1) this.observers.splice(index, 1);
    }
    
    notifyObservers(): void {
        this.observers.forEach((observer: CounterObserver) => {
            observer.update();
        })
    }
}