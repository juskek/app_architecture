import { useState } from "react";
import { ISharedCounterRepository } from "./ISharedCounterRepository";
import { CounterListener } from "./SharedCounterListener";

export class SharedCounterRepository implements ISharedCounterRepository{  
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
        this.notifyListeners(); // Added this line to trigger the state update which will be reflected in the UI

    }

    private listeners: CounterListener[] = [];


    addListener(listener: CounterListener): void {
        this.listeners.push(listener);
    }
    
    removeListener(listener: CounterListener): void {
        const index = this.listeners.indexOf(listener);
        if (index !== 1) this.listeners.splice(index, 1);
    }
    
    notifyListeners(): void {
        this.listeners.forEach((listener: CounterListener) => {
            listener.update();
        })
    }
}