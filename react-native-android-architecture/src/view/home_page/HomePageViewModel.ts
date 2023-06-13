import { createContext } from 'react';
import { ICounterRepository } from '../../data/counter/ICounterRepository';

type HomePageViewModelType = {
    count: number;
    increment: () => void;
}

export const HomePageViewModel = createContext<HomePageViewModelType>({
    // view is not updating with count even though the repository count value is increased
    // maybe because context does not detect the changes from a getter?
    count: ICounterRepository.instance.count, 
    increment: () => ICounterRepository.instance.increment(),
});