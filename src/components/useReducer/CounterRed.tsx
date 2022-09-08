import { useReducer } from 'react';
import { counterReducer, initialState } from './reducer';

export const CounterRed = () => {
  const [counterState, dispatch] = useReducer(counterReducer, initialState);
  return (
    <>
      <h2>counter: {counterState.counter}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>
        increment + 1
      </button>
      <button onClick={() => dispatch({ type: 'decremented' })}>
        decrement - 1
      </button>
      <button onClick={() => dispatch({ type: 'restart' })}>restart</button>
      <button onClick={() => dispatch({ type: 'custom', payload: 50 })}>
        custom
      </button>
    </>
  );
};
