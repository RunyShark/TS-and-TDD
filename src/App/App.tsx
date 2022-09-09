import { Counter, TimerFather, CounterRed, TestError } from '../index/index';
const label = ['buenos dias', 'buenos noches'];

export const App = () => {
  return (
    <>
      <TestError labelID={label} id={1} />
    </>
  );
};
