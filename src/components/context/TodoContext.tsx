import { createContext } from 'react';
import { InitialState } from '../interfaces';

export type TodoContextProps = {
  todoState: InitialState;
};

export const TodoContext = createContext<TodoContextProps>(
  {} as TodoContextProps
);
