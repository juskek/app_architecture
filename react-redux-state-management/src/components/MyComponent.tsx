import store from './store';
import { useSelector } from 'react-redux';

const MyComponent = () => {
    // 4. Subscribe to store to receive updates
    // You can use subscribe() to update the UI in response to state changes.
    // Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
    // There may be additional use cases where it's helpful to subscribe as well.
    store.subscribe(() => console.log(store.getState()))
    
    // Or select the value from the store to listen to updates for use in your component
    const value = useSelector((state: any) => state.reducer.value);

    const doSomething = () => {
        // 5. Mutate state in store
        // The only way to mutate the internal state is to dispatch an action.
        // The actions can be serialized, logged or stored and later replayed.
        store.dispatch({ type: 'counter/incremented' })
        store.dispatch({ type: 'counter/incremented' })
        store.dispatch({ type: 'counter/decremented' })
    }

    return (
        <>
            <button onClick={doSomething}>Increment Count</button>
            <h1>{value}</h1>
        </>
    );
}
export default MyComponent;
