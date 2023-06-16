import { useContext, useState } from "react";
import { CounterRepositoryContext } from "../../data/counter/ICounterRepository";

type CounterPageProps = {
    count: number,
    increment: () => void,
}

// View
export const CounterViewModel = (): CounterPageProps => {
    const { count, increment } = useContext(CounterRepositoryContext);




    return {
        count,
        increment,
    }

}