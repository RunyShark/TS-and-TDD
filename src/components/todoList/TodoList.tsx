import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const TodoList = () => {
  const {} = useContext(TodoContext);

  return <ul></ul>;
};
