import {
  Counter,
  TimerFather,
  CounterRed,
  TestError,
  TodoProvider,
} from '../index/index';

export const App = () => {
  return (
    <>
      <TodoProvider>
        <h1>Hello word</h1>
      </TodoProvider>
    </>
  );
};
