import { useContext, useState } from "react";
import { CounterRepositoryContext } from "../../data/counter/ISharedCounterRepository";

type CounterPageProps = {
    count: number,
    increment: () => void,
}

// View
export const CounterViewModel = (): CounterPageProps => {
    const repository = useContext(CounterRepositoryContext);
    const [count, _setCounter] = useState(repository.count);


    const increment = () => {
        repository.increment();
        _setCounter(repository.count);
    }



    return {
        count,
        increment,
    }

}