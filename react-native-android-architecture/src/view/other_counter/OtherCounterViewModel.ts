import { useContext, useEffect, useState } from "react";
import { CounterRepositoryContext, ICounterRepository } from "../../data/counter/ICounterRepository";
import { CounterObserver } from "../../data/counter/CounterObserver";

type CounterPageProps = {
    count: number,
    increment: () => void,
}

export const OtherCounterViewModel = (): CounterPageProps => {
    // this state is what will allow the UI to be retriggered on change
    const [count, setCount] = useState<number>(ICounterRepository.instance.count);

    useEffect(() => {
        /* 
         We define the observer to link the class and the UI in a reactive way.
         When the count variable is updated in the class, the observers are notified and the state variable
         is updated (setCount), triggering the UI to update
        */
        const observer: CounterObserver = {
            update: () => {
                setCount(ICounterRepository.instance.count);
            }
        }

        // "subscribe" the observer to the class instance
        ICounterRepository.instance.addObserver(observer);

        // clear the observer when it's not needed anymore (i.e. on dismount)
        return () => {
            ICounterRepository.instance.removeObserver(observer);
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