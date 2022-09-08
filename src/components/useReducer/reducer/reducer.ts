export const initialState = {
  counter: 0,
};

type actionType =
  | { type: 'increment' }
  | { type: 'decremented' }
  | { type: 'restart' }
  | { type: 'custom'; payload: number };

export const counterReducer = (
  state: typeof initialState,
  action: actionType
) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'decremented':
      return {
        ...state,
        counter: state.counter - 1,
      };
    case 'custom':
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case 'restart':
      return (state = initialState);

    default:
      return initialState;
  }
};
