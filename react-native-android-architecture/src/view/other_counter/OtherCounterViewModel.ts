import { useContext, useState } from "react";
import { CounterRepositoryContext } from "../../data/counter/ICounterRepository";

type CounterPageProps = {
    count: number,
    increment: () => void,
}

// View
export const OtherCounterViewModel = (): CounterPageProps => {
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