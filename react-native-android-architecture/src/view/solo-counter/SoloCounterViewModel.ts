import { useContext, useEffect, useState } from "react";
import { SharedCounterRepositoryContext, ISharedCounterRepository } from "../../data/shared-counter/ISharedCounterRepository";
import { CounterListener } from "../../data/shared-counter/SharedCounterListener";
import { ISoloCounterRepository } from "../../data/solo-counter/ISoloCounterRepository";

type CounterPageProps = {
    count: number,
    increment: () => void,
}

// View
export const SoloCounterViewModel = (): CounterPageProps => {
    const repository = ISoloCounterRepository.instance;
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