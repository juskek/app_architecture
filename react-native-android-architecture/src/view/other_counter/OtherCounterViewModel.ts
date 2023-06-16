import { useContext, useEffect, useState } from "react";
import { SharedCounterRepositoryContext, ISharedCounterRepository } from "../../data/counter/ISharedCounterRepository";
import { CounterListener } from "../../data/counter/SharedCounterListener";

type CounterPageProps = {
    count: number,
    increment: () => void,
}

export const OtherCounterViewModel = (): CounterPageProps => {
    // this state is what will allow the UI to be retriggered on change
    const [count, setCount] = useState<number>(ISharedCounterRepository.instance.count);

    useEffect(() => {
        /* 
         We define the listener to link the class and the UI in a reactive way.
         When the count variable is updated in the class, the listeners are notified and the state variable
         is updated (setCount), triggering the UI to update
        */
        const listener: CounterListener = {
            update: () => {
                setCount(ISharedCounterRepository.instance.count);
            }
        }

        // "subscribe" the listener to the class instance
        ISharedCounterRepository.instance.addListener(listener);

        // clear the listener when it's not needed anymore (i.e. on dismount)
        return () => {
            ISharedCounterRepository.instance.removeListener(listener);
        }
    }, []);

    const increment = () => {
        ISharedCounterRepository.instance.increment();
    }
    return {
        count,
        increment,
    }

}