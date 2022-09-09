export interface InitialState {
  todoCount: number;
  todo: Todo[];
  completed: number;
  pending: number;
}

export interface Todo {
  id: string;
  desc: string;
  completed: boolean;
}
