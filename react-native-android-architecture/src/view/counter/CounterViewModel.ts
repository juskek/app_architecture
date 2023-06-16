import { useContext, useEffect, useState } from "react";
import { CounterRepositoryContext, ICounterRepository } from "../../data/counter/ICounterRepository";
import { CounterListener } from "../../data/counter/CounterListener";

type CounterPageProps = {
    count: number,
    increment: () => void,
}

// View
export const CounterViewModel = (): CounterPageProps => {
    // this state is what will allow the UI to be retriggered on change
    const [count, setCount] = useState<number>(ICounterRepository.instance.count);

    useEffect(() => {
        /* 
         We define the listener to link the class and the UI in a reactive way.
         When the count variable is updated in the class, the listeners are notified and the state variable
         is updated (setCount), triggering the UI to update
        */
        const listener: CounterListener = {
            update: () => {
                setCount(ICounterRepository.instance.count);
            }
        }

        // "subscribe" the listener to the class instance
        ICounterRepository.instance.addListener(listener);

        // clear the listener when it's not needed anymore (i.e. on dismount)
        return () => {
            ICounterRepository.instance.removeListener(listener);
        }
    }, []);

    const increment = () => {
        ICounterRepository.instance.increment();
    }


    return {
        count,
        increment,
    }

}