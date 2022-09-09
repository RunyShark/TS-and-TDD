import { useContext } from 'react';

import { TodoContext, CardTodo } from '../../index/index';

export const TodoList = () => {
  const { todoState } = useContext(TodoContext);
  const { todo } = todoState;

  return (
    <ul>
      <CardTodo key={todo.desc} args={todo} />{' '}
    </ul>
  );
};
