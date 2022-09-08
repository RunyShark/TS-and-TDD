import { useState } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleClick = (n: number = 1): void => {
    setCounter(counter + n);
  };

  return (
    <>
      <h3>Value count: {counter}</h3>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(2)}>+2</button>
      <button onClick={() => handleClick(-1)}>-1</button>
      <button onClick={() => handleClick(0)}>Reset</button>
    </>
  );
};
