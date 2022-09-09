import { useReducer } from 'react';
import { TodoContext, InitialState, todoReducer } from '../../index/index';

const INITIAL_STATE: InitialState = {
  todoCount: 2,
  todo: [
    {
      id: '10',
      desc: 'ToDo',
      completed: false,
    },
  ],
  completed: 0,
  pending: 2,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: Props) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);
  return (
    <TodoContext.Provider value={{ todoState }}>
      {children}
    </TodoContext.Provider>
  );
};
