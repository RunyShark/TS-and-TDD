import { InitialState, Todo } from '../../index/index';

type TodoAction =
  | { type: 'addTodo'; payload: Todo }
  | { type: 'toggleTodo'; payload: Todo };

export const todoReducer = (
  state: InitialState,
  action: TodoAction
): InitialState => {
  switch (action.type) {
    case 'addTodo':
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };

    //   case "toggleTodo"
    //   return
    default:
      return state;
  }
};
