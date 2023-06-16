import { useContext, useState } from "react";
import { CounterRepositoryContext } from "../../data/counter/ICounterRepository";

type CounterPageProps = {
    count: number,
    increment: () => void,
}

export const OtherCounterViewModel = (): CounterPageProps => {
    const { count, increment } = useContext(CounterRepositoryContext);

    return {
        count,
        increment,
    }

}