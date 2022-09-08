export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h3>Value count: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </>
  );
};
